
export const btnSelect = (selects, arrProperties) => {
    selects.forEach(select => {
        select.addEventListener("click", () => {
            const filter = arrProperties.filter((property) => property.type === select.id);
            const filteredSelects = select.id === 'all' ? arrProperties : filter;
            console.log(filteredSelects);
        })
    });
}