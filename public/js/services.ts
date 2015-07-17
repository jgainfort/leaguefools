

// Services
export class SummonerService {
	name: String;
	id: Number;
	level: Number;
	profileIconId: Number;
	revisionDate: Number;
	
	constructor() {
		this.name = 'cod3nameDuchess';
		this.id = 38910468;
		this.revisionDate = 1436932477000;
		this.profileIconId = 28;
		this.level = 30;
	}
	
	getSummoner() {
		return {
			name: this.name,
			id: this.id,
			revisionDate: this.revisionDate,
			level: this.level,
			profileIconId: this.profileIconId
		}
	}
}