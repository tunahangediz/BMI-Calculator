import { useState, useEffect } from "react";

function BMIcard() {
    const [boy, setBoy] = useState(0);
    const [kilo, setKilo] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [state, setState] = useState(null);

    const handleBMI = (e) => {
        e.preventDefault();
        setBMI(Number((kilo / Math.pow(boy / 100, 2)).toFixed(2)));
    };

    useEffect(() => {
        BMI && checkBMI();
        return () => {};
    }, [BMI]);
    const checkBMI = () => {
        if (BMI <= 18.5) {
            setState(" Zayıf");
        } else if (BMI > 18.5 && BMI <= 24.9) {
            setState(" Normal kilolu");
        } else if (BMI >= 25 && BMI < 30) {
            setState(" Fazla kilolu");
        } else if (BMI > 30) setState(" Obezite");
    };
    return (
        <div className="max-w-xs px-6 py-4 w-96  h-96 mt-10 bg-white text-xl rounded-md">
            <div className="my-4">
                <h1 className="text-blue-700">BMI Hesaplama</h1>
            </div>
            <form onSubmit={handleBMI} className="">
                <div className="form-control flex flex-col w-40">
                    <label htmlFor="boy">Boy</label>
                    <input
                        className="border-gray-700 border-solid border-2 rounded"
                        onChange={(e) => setBoy(e.target.value)}
                        id="boy"
                        type="number"
                    />
                </div>

                <div className="form-control flex flex-col w-40 my-4">
                    <label htmlFor="kilo">Kilo(kg)</label>
                    <input
                        className="border-gray-700 border-solid border-2 rounded "
                        onChange={(e) => setKilo(e.target.value)}
                        id="kilo"
                        type="number"
                    />
                </div>

                <input
                    type="submit"
                    value="Hesapla"
                    className="p-2 bg-blue-600 text-white rounded my-4"
                />
            </form>
            <h3>
                <strong>Vücüt kitle endeksiniz: </strong> {BMI ? BMI : ""}
                {state && state}
            </h3>
        </div>
    );
}

export default BMIcard;
