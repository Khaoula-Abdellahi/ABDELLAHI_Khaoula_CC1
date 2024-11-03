import React, { useState } from 'react';

const ListeVoiture = () => {
    const [cars, setCars] = useState([
        {
            id: 'v1',
            marque: 'Dacia_Logan',
            typeCarburant: 'Diesel',
            prixLocation: 200,
            image: 'https://static.medias24.com/content/uploads/2022/11/28/dacia_logan_new.png?x55896',
        },
        {
            id: 'v2',
            marque: 'Peugeot208',
            typeCarburant: 'Essance',
            prixLocation: 400,
            image: 'https://auto.assafashowroom.com/sites/assafaexpo.com/files/2021-03/peugeot-208-2.png',
        },
    ]);

    const [newCar, setNewCar] = useState({
        id: '', 
        marque: '',
        typeCarburant: '',
        prixLocation: '',
        image: '',
    });

    const inputChange = (e) => {
        const { name, value } = e.target;
        setNewCar((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const selectChange = (value) => {
        setNewCar((data) => ({
            ...data,
            typeCarburant: value,
        }));
    };


    const submit = (e) => {
        e.preventDefault();
        setCars([...cars, newCar]);
        setNewCar({
            id: '',
            marque: '',
            typeCarburant: '',
            prixLocation: '',
            image: '',
        });
    };

    const deleteCar = (carId) => {
        setCars(cars.filter((car) => car.id !== carId));
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-2xl font-bold mb-5 text-center">Liste des voitures</h2>
            <form onSubmit={submit} className="w-full">
                <div className="mb-4">
                    <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
                        ID
                    </label>
                    <input
                        type="text"
                        id="id" 
                        name="id"
                        value={newCar.id}
                        placeholder="ID de la voiture"
                        onChange={inputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="marque" className="block text-gray-700 font-bold mb-2">
                        Marque
                    </label>
                    <input
                        type="text"
                        id="marque" 
                        name="marque"
                        value={newCar.marque}
                        placeholder="Marque de la voiture"
                        onChange={inputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="typeCarburant" className="block text-gray-700 font-bold mb-2">
                        Type de carburant
                    </label>
                    <select
                        id="typeCarburant"
                        name="typeCarburant"
                        value={newCar.typeCarburant}
                        placeholder="Type de carburant"
                        onChange={(e) => selectChange(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Selectionner un type de carburant</option>
                        <option value="Essance">Essance</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electrique">Electrique</option>
                        <option value="Hybride">Hybride</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="prixLocation" className="block text-gray-700 font-bold mb-2">
                        Prix de location    
                    </label>
                    <input
                        type="number"
                        id="prixLocation"
                        name="prixLocation"
                        placeholder='Prix de location'
                        value={newCar.prixLocation}
                        onChange={inputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={newCar.image}
                        placeholder="Image URL de la voiture"
                        onChange={inputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ajouter
                </button>
            </form>

            <table className="w-full mt-10 text-center">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"> 
                        <th>ID</th>
                        <th>Marque</th>
                        <th>Type de carburant</th>
                        <th>Prix de location</th>
                        <th>Image</th>
                        <th>Opération</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.marque}</td>
                            <td>{car.typeCarburant}</td>
                            <td>{car.prixLocation}</td>
                            <td>
                                <img className='w-[100px]' src={car.image} alt={car.marque} />
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteCar(car.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeVoiture;