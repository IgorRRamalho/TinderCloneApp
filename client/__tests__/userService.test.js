import axios from 'axios';
import { getUsers, addUser } from '../src/services/Api';

jest.mock('axios');

describe('addUser', () => {
    it('deve adicionar um novo usuário e retornar os dados do usuário', async () => {
        const newUser = {
            "email": "JEFERSON@teste.com",
            "name": "JEFERSON teste API",
            "age": 25,
            "gender": "male",
            "bio": "Short bio",
            "photos": [
                "photo1_url",
                "photo2_url"
            ],
            "location": {
                "type": "Point",
                "coordinates": [
                    -73.97,
                    40.77
                ]
            },
            "preferences": {
                "gender": "female",
                "ageRange": [20, 30],
                "distance": 50
            },
            "interests": [
                "665e5330c047a91593ed9ab3",
                "665e5330c047a91593ed9abc",
                "665e5330c047a91593ed9ac0"
            ]
        };
        const addedUser = { id: 1, ...newUser };
        axios.post.mockResolvedValue({ data: addedUser });

        const result = await addUser(newUser);

        expect(result).toEqual(addedUser);
    });

    it('deve lançar um erro quando a adição de usuário falha', async () => {
        const newUser = {
            "email": "JEFERSON@teste.com",
            "name": "JEFERSON teste API",
            "age": 25,
            "gender": "male",
            "bio": "Short bio",
            "photos": [
                "photo1_url",
                "photo2_url"
            ],
            "location": {
                "type": "Point",
                "coordinates": [
                    -73.97,
                    40.77
                ]
            },
            "preferences": {
                "gender": "female",
                "ageRange": [20, 30],
                "distance": 50
            },
            "interests": [
                "665e5330c047a91593ed9ab3",
                "665e5330c047a91593ed9abc",
                "665e5330c047a91593ed9ac0"
            ]
        };
        const errorMessage = 'Network Error';
        axios.post.mockRejectedValue(new Error(errorMessage));

        await expect(addUser(newUser)).rejects.toThrow(errorMessage);
    });
});
