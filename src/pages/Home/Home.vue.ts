import { Options, Vue } from 'vue-class-component';

@Options({
    name: "Home"
})
export default class Home extends Vue {
    private pageList = ["Dashboard", "Users", "Admins", "Profile"];
    private activePage = "Dashboard";

    private changePage(page: string): void {
        this.activePage = page;
    }
}