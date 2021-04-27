export const people = [
    {
        id: "0",
        name: "Crystal",
        age: 23,
        gender: "female"
    },
    {
        id: "1",
        name: "Jamie",
        age: 16,
        gender: "female"
    },
    {
        id: "2",
        name: "Sola",
        age: 28,
        gender: "female"
    },
    {
        id: "3",
        name: "Jenny",
        age: 22,
        gender: "female"
    },
    {
        id: "4",
        name: "Kai",
        age: 30,
        gender: "male"
    },
    {
        id: "5",
        name: "hyuk",
        age: 26,
        gender: "male"
    },
    {
        id: "6",
        name: "finn",
        age: 24,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};
