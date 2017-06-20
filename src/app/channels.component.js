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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var channel_service_1 = require("./channel.service");
var ChannelsComponent = (function () {
    function ChannelsComponent(channelService, router) {
        this.channelService = channelService;
        this.router = router;
    }
    ChannelsComponent.prototype.getChannels = function () {
        var _this = this;
        this.channelService
            .getChannels()
            .then(function (channels) { return _this.channels = channels; });
    };
    ChannelsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.channelService.create(name)
            .then(function (channel) {
            _this.channels.push(channel);
            _this.selectedChannel = null;
        });
    };
    ChannelsComponent.prototype.delete = function (channel) {
        var _this = this;
        this.channelService
            .delete(channel.id)
            .then(function () {
            _this.channels = _this.channels.filter(function (h) { return h !== channel; });
            if (_this.selectedChannel === channel) {
                _this.selectedChannel = null;
            }
        });
    };
    ChannelsComponent.prototype.ngOnInit = function () {
        this.getChannels();
    };
    ChannelsComponent.prototype.onSelect = function (channel) {
        this.selectedChannel = channel;
    };
    ChannelsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedChannel.id]);
    };
    return ChannelsComponent;
}());
ChannelsComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './channels.component.html',
        styleUrls: ['./channels.component.css']
    }),
    __metadata("design:paramtypes", [channel_service_1.ChannelService,
        router_1.Router])
], ChannelsComponent);
exports.ChannelsComponent = ChannelsComponent;
//# sourceMappingURL=channels.component.js.map