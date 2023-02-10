class ModelApiTest {
    public select(params: any): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            let result = "Sono i dati dell'APITest"
            resolve(result);
        });
    }
}

export default new ModelApiTest;