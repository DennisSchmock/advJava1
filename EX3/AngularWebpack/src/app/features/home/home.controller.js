/**
 * Created by dennisschmock on 16/02/2017.
 */
export default class HomeController {
    constructor(randomNames) {
        this.random = randomNames;
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.random.getName();
    }
}
HomeController.$inject = ['randomNames'];
