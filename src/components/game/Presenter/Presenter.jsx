import "./presenter.css"
export const PresenterComponent = ({presentation}) => {
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
                {presentation} etyuki
            </div>
        </div>)
}