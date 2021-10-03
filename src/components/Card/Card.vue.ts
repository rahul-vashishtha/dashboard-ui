import { Utils } from '@/helpers/Utils';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
    name: "Card"
})
export default class Card extends Vue {
    @Prop() private direction = "column";
    @Prop() private alignItems = "";
    @Prop() private class = "";
    @Prop() private style = "";

    private get itemsAlign(): string {
        return Utils.isStringEmpty(this.alignItems) ? "" : `items-${this.alignItems}`;
    }

    private get flexDirection(): string {
        if (this.direction == undefined) {
            return '';
        }

        return `flex-${this.direction == 'column' ? 'col' : this.direction}`
    }

    private get tClass(): string {
        return this.class || '';
    }

    private get tStyle(): string {
        return this.style;
    }
}