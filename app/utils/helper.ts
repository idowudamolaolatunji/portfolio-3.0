export function calcYears() {
    const date = new Date();
    const currYear = date.getFullYear();
    const startYear = 2021;

    return currYear - startYear
}