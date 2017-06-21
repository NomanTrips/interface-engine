"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var channel_service_1 = require("./channel.service");
var ChannelDetailComponent = (function () {
    function ChannelDetailComponent(channelService, route, location) {
        this.channelService = channelService;
        this.route = route;
        this.location = location;
        this.inboundTypes = [{ text: 'SFTP' }, { text: 'HTTP' }, { text: 'TCP/IP' }];
    }
    ChannelDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.channelService.getChannel(+params['id']); })
            .subscribe(function (channel) { return _this.channel = channel; });
    };
    ChannelDetailComponent.prototype.save = function () {
        var _this = this;
        this.channelService.update(this.channel)
            .then(function () { return _this.goBack(); });
    };
    ChannelDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ChannelDetailComponent;
}());
ChannelDetailComponent = __decorate([
    core_1.Component({
        selector: 'channel-detail',
        templateUrl: './channel-detail.component.html',
        styleUrls: ['./channel-detail.component.css']
    }),
    __metadata("design:paramtypes", [channel_service_1.ChannelService,
        router_1.ActivatedRoute,
        common_1.Location])
], ChannelDetailComponent);
exports.ChannelDetailComponent = ChannelDetailComponent;
//# sourceMappingURL=channel-detail.component.js.map