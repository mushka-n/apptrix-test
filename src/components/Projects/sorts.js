export const sortProjectsByID = (arr, setArr) => {
    setArr(
        [...arr].sort((a, b) => {
            const [idA, idB] = [a, b].map((p) => {
                const id = p.id.split("-");
                return +id[0] * 1000 + +id[1];
            });
            return sortBetweenTwo(idA, idB);
        })
    );
};

export const sortProjectsBySummary = (arr, setArr) => {
    setArr(
        [...arr].sort((a, b) => {
            return sortBetweenTwo(a.summary, b.summary);
        })
    );
};

export const sortProjectsByName = (arr, setArr) => {
    setArr(
        [...arr].sort((a, b) => {
            return sortBetweenTwo(a.project.name, b.project.name);
        })
    );
};

const sortBetweenTwo = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};
