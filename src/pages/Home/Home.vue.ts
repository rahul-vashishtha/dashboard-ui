import { Options, Vue } from 'vue-class-component';
import Customers from '../Customers/Customers.vue';
import Dashboard from '../Dashboard/Dashboard.vue';
import Inventory from '../Inventory/Inventory.vue';
import Orders from '../Orders/Orders.vue';
import Reports from '../Reports/Reports.vue';
import Settings from '../Settings/Settings.vue';

@Options({
    name: "Home",
    components: {
        Dashboard, Inventory, Orders, Customers, Reports, Settings
    }
})
export default class Home extends Vue {
    private pageList = ["Dashboard", "Inventory", "Orders", "Customers", "Reports", "Settings"];
    private activePage = "Dashboard";

    private changePage(page: string): void {
        this.activePage = page;
    }
}