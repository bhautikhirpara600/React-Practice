import { AppleBasket } from "./AppleBasket"
import { Button } from "./Button"
import LeftBtn from "../assets/images/left-arrow.png"
import RightBtn from "../assets/images/right-arrow.png"


export const MainSection = () => {
    return (
        <section>
            <AppleBasket appleCount="10" basketName="Basket-1" />
            <Button imgURL={LeftBtn} title="left-arrow" />
            <Button imgURL={RightBtn} title="right-arrow" />
            <AppleBasket appleCount="0" basketName="Basket-2" />
        </section>
    )
}
