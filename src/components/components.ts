import { App } from "vue";
import Card from "./Card/Card.vue";

export default function registerComponents(app: App<Element>): void {
    app.component('card', Card);
}