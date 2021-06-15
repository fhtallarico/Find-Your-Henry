import { React } from "@ungap/global-this";
import "../../styles/index.css"

export type Props = {
    name:string;
    picture: string;
    description: string
}

const EmpresaCard :React.FC <Props> = props => {
    const {name,picture,description} = props;
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow my-2">
            <img
                className="w-full h-56 object-cover object-center"
                src={picture}
                alt="avatar"
            />
            <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                <span className="py-2 text-lg text-gray-700">
                    {description}
                </span>
            </div>
        </div>

    )
}

export default EmpresaCard