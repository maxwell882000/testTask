import {ref} from "vue";
import filters from "../constants/filters.js";

export default function () {
    const filterValue = ref(filters.NONE);

    function setFilterValue(value) {
        filterValue.value = value;
    }

    function filterAll(element, searchName) {
        if (searchName.value && filters.NONE !== filterValue.value) {
            switch (parseInt(filterValue.value)) {
                case filters.FIRST_NAME:
                    return element.firstName.match(searchName.value) !== null;
                case filters.LAST_NAME:
                    return element.lastName.match(searchName.value) !== null;
                case filters.FATHER_NAME:
                    return element.fatherName.match(searchName.value) !== null;
                case filters.PHONE:
                    return element.phone.match(searchName.value) !== null;
                case filters.TAGS:
                    return element.tags.filter(e => e.selected).map(e => e.name).join(", ").match(searchName.value) !== null;
                case filters.EMAIL:
                    return element.email.match(searchName.value) !== null;
            }
        }
        return true;
    }

    return {
        setFilterValue: setFilterValue,
        filterAll: filterAll
    }
}