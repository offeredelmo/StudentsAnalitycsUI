import { Chip } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropzone = ({setFiles, files}) => {

    const handleDelete = (lastModified) => () => {
        // Filtra el archivo que se va a eliminar basado en lastModified
        setFiles(prevFiles => prevFiles.filter(file => file.lastModified !== lastModified));
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Actualiza el estado con los archivos subidos
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
        console.log(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div style={{ width: '100%' }}>
            <div {...getRootProps()} style={{ border: '2px dashed #007bff', width: '100%', textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Suelta los archivos aquí...</p> :
                        <p>Selecciona archivos</p>
                }
            </div>
            <ul>
                {files.map((file, index) => (
                       <Chip
                       key={index}
                       label={file.name}
                       onDelete={handleDelete(file.lastModified)}
                       style={{ margin: '5px' }}
                   />                   
                ))}
            </ul>
        </div>
    );
};

export default Dropzone;
