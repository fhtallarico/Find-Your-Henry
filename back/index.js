const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { resolvers } = require("./src/resolvers");
const { typeDefs } = require("./src/schema");
const jwt = require("jsonwebtoken");
const path = require("path");
const logger = require('morgan');
const winstonLogger = require('./logger.js');


const app = express();

app.use(cors());
//Settings Nodemailer
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(require("./routes/index"));
//app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use(logger('dev'));

// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
//   }));

app.use(express.json());

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, "secretkey");
    }
    return null;
  } catch (error) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;

    return { user: token ? getUser(token.split(" ")[1]) : null };
  },
  introspection: true,
  playground: true,
});
server.applyMiddleware({ app });

app.listen(3001, () => winstonLogger.info('Server running'));
