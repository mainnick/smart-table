import {createComparison, rules} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [
            rules.searchMultipleFields(
                searchField,
                ['date', 'customer', 'seller'],
                false
            )
        ]
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        const filteredData = data.filter(row => {
            const result = compare(row, state);
            return result;
        });
        return filteredData;
    }
}