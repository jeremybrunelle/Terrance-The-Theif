import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Scene from "../../Wolfie2D/Scene/Scene";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Level2 from "./Level2";
import MainMenu from "./MainMenu";

export default class Level6Complete extends Scene {

    private time: number = 0;

    startScene(): void {
        const center = this.viewport.getCenter();

        this.addUILayer("primary");

        const text = this.add.uiElement(UIElementType.LABEL, "primary", {position: new Vec2(center.x, center.y), text: "Level Complete!"});
    }

    public updateScene() {
        if (this.time == 400) {
            this.sceneManager.changeToScene(MainMenu);
        }
        this.time++;
    }

}