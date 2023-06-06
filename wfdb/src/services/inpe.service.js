
class INPEService {
    #baseURL
    constructor() {
        this.#baseURL = 'https://queimadas.dgi.inpe.br';
    }

    async menu() {
        const response = await fetch(`${this.#baseURL}/home/`);
        const data = await response.json();
        return data;
      }
}
export default INPEService;
