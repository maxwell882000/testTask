import {ref} from "vue";
import Pages from "../pages.js";

export default function () {
    function setPage(p) {
        page.value = p;
    }

    function toChange() {
        setPage(Pages.CHANGE)
    }

    function toMain() {
        setPage(Pages.MAIN);
    }

    const page = ref(Pages.MAIN);
    return {
        page: page,
        toChange: toChange,
        toMain: toMain
    }
}