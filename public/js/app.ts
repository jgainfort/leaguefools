/// <reference path="../../typings/angular2/angular2" />
/// <reference path="services" />

import {Component, View, bootstrap} from "angular2/angular2";
import {SummonerService} from "services";

// Annotation section
@Component({
	selector: 'my-app',
	appInjector: [SummonerService]
})
@View({
	templateUrl: 'templates/index.tpl.html'
})

// Component controller
class MyAppComponent {
	summoner: Object;
	
	constructor(summonerService: SummonerService) {
		this.summoner = summonerService.getSummoner();
		
	}
}

bootstrap(MyAppComponent);