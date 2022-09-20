const key = "local-contacts"

class LocalService {

    store(data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getStore() {
        const stores = localStorage.getItem(key);
        console.log(stores);
        if (stores)
            return JSON.parse(stores)._rawValue
        return [];
    }
}

export default new LocalService();