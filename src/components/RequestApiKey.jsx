import { APIKEY } from 'config';
import { useState } from "preact/hooks";

export const RequestApiKey = () => {
    const [apiKey, setApiKey] = useState('');

    const handleInputChange = (event) => {
        setApiKey(event.target.value);
    };

    const handleSaveClick = () => {
        localStorage.setItem(APIKEY, apiKey);
        window.location.reload();
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="api-key" style={{color:"white", paddingRight:"10px"}}>Qroq API Key</label>
                <input
                    id="api-key"
                    type="password"
                    value={apiKey}
                    placeholder={"API key para funcionar"}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleSaveClick}>Save</button>
            </form>
        </>
    );
}

