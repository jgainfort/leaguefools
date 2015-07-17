// Services
var SummonerService = (function () {
    function SummonerService() {
        this.name = 'cod3nameDuchess';
        this.id = 38910468;
        this.revisionDate = 1436932477000;
        this.profileIconId = 28;
        this.level = 30;
    }
    SummonerService.prototype.getSummoner = function () {
        return {
            name: this.name,
            id: this.id,
            revisionDate: this.revisionDate,
            level: this.level,
            profileIconId: this.profileIconId
        };
    };
    return SummonerService;
})();
exports.SummonerService = SummonerService;
