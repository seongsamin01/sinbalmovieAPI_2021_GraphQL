let movies = [
    {
        id: 0,
        name: "7번방의 선물",
        score: 8
    },
    {
        id: 1,
        name: "달마야 간다",
        score: 4
    },
    {
        id: 2,
        name: "장화홍련",
        score: 3
    },
    {
        id: 3,
        name: "기생충",
        score: 10
    },
    {
        id: 4,
        name: "미나리",
        score: 10
    },
    {
        id: 5,
        name: "미션임파서블",
        score: 9
    }
];

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};