import { useState, useEffect } from "preact/hooks";
import Presenter from "@entities/Presenter";
import "./presenter.css"
import { enumPresenter as enumP } from "@enum/enumPresenter";


export const PresenterComponent = (props) => {
    const { typePresenter, username } = props;
    const [presenter, setPresenter] = useState("...");

    useEffect(async () => {
        setPresenter(Presenter.thinking())
        try {
            const result = await sayPresenter(typePresenter);
            setPresenter(result)
        } catch (error) {
            setPresenter(Presenter.getNoPresenterResponse(typePresenter))

        }
    }, [typePresenter]);


    const sayPresenter = async (mType) => {
        switch (mType) {
            case enumP.presentation:
                return await Presenter.callPresentacion(username)
            case enumP.comodin:
                return await Presenter.callComodin()
            case enumP.correct:
                return await Presenter.callCorrect()
            case enumP.incorrect:
                return await Presenter.callIncorrect(username)
            case enumP.winner:
                return await Presenter.callWinner(username)
            default:
                return "...";
        }
    }

    return (
        <div id="presentador">
            <div class="img-presentador">
                { /*mobile version hide this photo and lg do it absolute img */}
                <img
                    src="./person.png"
                    height="100"
                    width="100"
                    alt="Es el Presentador"
                    aria-hidden="true"
                />
            </div>
            <div id="npcPresentador" class="text-presentador">
                {presenter}
            </div>
        </div>)
}