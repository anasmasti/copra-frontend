"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowBlogsComponent = void 0;
var core_1 = require("@angular/core");
var ShowBlogsComponent = /** @class */ (function () {
    function ShowBlogsComponent(twitter, http, actRoute) {
        this.twitter = twitter;
        this.http = http;
        this.actRoute = actRoute;
    }
    ShowBlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.http.get('http://localhost:5000/api/blog/' + id).subscribe(function (data) {
            _this.blog = data;
        });
        this.getHomeTimeline();
    };
    ShowBlogsComponent.prototype.getHomeTimeline = function () {
        var _this = this;
        this.twitter.get('https://api.twitter.com/1.1/statuses/home_timeline.json', {
            count: 5
        }, {
            consumerKey: 'iExpQ1TcJ6KeVscMM6ZAnYn1D',
            consumerSecret: 'Mmh0RP3lON58B66UcMA6KrTLsZjdhHlKTwMNd4SyW9U9fE46gV'
        }, {
            token: '1558833242-Xe8mvfkdyJojP29yynZjPm52cTUwSBoS1qQbUvC',
            tokenSecret: 'RDmFVfIDRLcCdaSzt6tZmSuMLZLcmq4sPbeQwiDZRks7w'
        }).subscribe(function (twette) {
            _this.tweets = twette;
        });
    };
    ShowBlogsComponent = __decorate([
        core_1.Component({
            selector: 'app-show-blogs',
            templateUrl: './show-blogs.component.html',
            styleUrls: ['./show-blogs.component.css']
        })
    ], ShowBlogsComponent);
    return ShowBlogsComponent;
}());
exports.ShowBlogsComponent = ShowBlogsComponent;
