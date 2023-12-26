import React from "react";
import Container from "../../components/container";
import AppDropzone from "../../components/AppDropzone/AppDropzone";


const Upload: React.FC = () => {
    const [newFile, setNewFile] = React.useState<File | null>(null);

    const handleFileUpload = (file: File) => {
        console.log(file);
        setNewFile(file);
    }    

    React.useEffect(() => {
        console.log(newFile);
    }
    , [newFile]);
    return (
        <Container
            className="bg-gray-100 h-full flex flex-col space-between items-center"
            style={{
                
            }}

        >
            <div className="flex flex-col items-center justify-center m-6">
                <h1 className="text-3xl font-bold">Upload</h1>
                <p className="text-xl">Upload your file here</p>
            </div>
            <AppDropzone  className="ww-8/12" onFileUpload={(file)=>{handleFileUpload(file)}} />
            <div className="flex flex-col items-center justify-center">
                <>{newFile? newFile.name : ""}</>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6">
                    Upload
                </button>
            </div>
        </Container>
    )
};

export default Upload