'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "093122e25a289d6de8db97f5e3f2d460",
"index.html": "9e81c7d39d9b80382aac56e0be9b7058",
"/": "9e81c7d39d9b80382aac56e0be9b7058",
"main.dart.js": "b9669baac676559548ee1d735e3bcea3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "39a21fb970054deaffce9b457f418bb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d57428c7204e3dabfe2b0bb9b46fdd46",
".git/config": "62be1f59399626003faf611b42dd0bfd",
".git/objects/59/09b908133c1e1f000e1ade0f500a89e271f3c6": "f934b3a43250d2ce42674c2d3689747d",
".git/objects/0c/c9c21f7aa8e086a605e0bf5752371a3f3c318a": "d10127b15e09da7cb102de07d362545b",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/b5336c62932dcf099d2e240275f900dbffcd3a": "45ad866ac76c16b47af9277b80fa3de1",
".git/objects/68/74dc912b3416799811843e45fd94c556b7290b": "00aca1b5c1416f4ccc203778683edee5",
".git/objects/68/0bc672e842f402140cc653cb92dc278fa2ae84": "4ff23899e4f045534bc14d27f20dab00",
".git/objects/3b/cee5c2aab8b6399fd5a3447e70fc40a4acff28": "1c0c860cb028e68d67c4bf2ca2864af6",
".git/objects/3b/15d70984b9d7389a141d3574063597ed0f9724": "cc2243efa55bf5aa83e2594c03189216",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6a/b792c51d94442c52fa49ef66d5ce0dca8b77c2": "de798c701b2da0c232454e1c8c0fee84",
".git/objects/35/fc11c8d5218c64d8b26961f05ead6900f4acb5": "9fba6b5892c67756809685f9881bf1bf",
".git/objects/35/8e35167b2ff72a2cabdb6d0ae6b3d7722f60f3": "805b7939a85d191c00aecad095328b00",
".git/objects/3c/fd7e44e9736756a9c109501102ea8cccbc4fda": "d200fd8d8dc4553f508ef351bb2a6302",
".git/objects/58/ce5ef18ee5815596f942d01d21eb165d5a7b5d": "9191b31374f3da351d018bc7f47cb82e",
".git/objects/58/bbfca4b9b50cc6b585f74aa9627d58fc694562": "36225ca308fb5113f3ccee33869816ed",
".git/objects/93/72861dbdfee8bce01cb2392a7a558001ec85a5": "227de59cfa60f1217daaece1383e8b28",
".git/objects/93/a8df739792b384af2595442fa06098b8d4931a": "5f4a5785705be21adaea888bcbde8e2f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/714d366fcf282d81c2ec6458964d5c8f72b563": "6a86c7efd9f2dd11e583f7800e22ae1e",
".git/objects/34/537baf2f51176b23c80a86516f8d0f829bcb4c": "7807dd6981ed84a307d9484620d86f15",
".git/objects/34/f97e813ec4d74925fd2629900ddb3efb8c1259": "b9fc40dff02ce2bd7ce064005b20f74e",
".git/objects/5a/b1b8ba6078ff56af06cb9b23275388b0cb62e9": "a0916ffa890e7c4a37c67abb353bb9d1",
".git/objects/9d/4c2a2b06db6df8191f29d5b157ea4e25a193e9": "9ec5132845a3e1bd7b21a09e34b094ca",
".git/objects/02/74d73e97483df3d4d324ed4fd5931a99450b81": "485693e93c571428da46396d98a4928d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/23272fbc7a254e2e4b3a9c0a08723c77733046": "d9ef5d876f8821746c0b8abfcbb4d00d",
".git/objects/ac/9731ee6fcb19c9aab2651fe1c8e91b4af61891": "fca52f3bccff3f374ddae0b1da42e561",
".git/objects/bb/1b7c6ccd09600dd7b8f3c1ebc9ee7d9caa92e3": "3e302887df879f5163e3aa728d0bd907",
".git/objects/d7/e8eeb56c134f24101d62023ab221744673a25c": "bbc69521066cbc5e13d95095aeb8ce81",
".git/objects/da/c30170be32aa8d75dd0f0fe7e5ceb2cec99c01": "12b11d5093799266fdde6eac49d206cd",
".git/objects/a5/3b85a43517d7d61f5a21bce3de46b18964a52c": "69c3e301dd65795159fadfa312db43b5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0bce49bb9a896be2c3ad0f4c103bb87d50d030": "b53a29d1cbda1753e1e301c2c52208c9",
".git/objects/d8/e6a361531a3f543f10fbff158f05a65e1d7dba": "f9afc5421dc9df057f612006f94406d8",
".git/objects/ab/443b628dada8f1f156da0e687dc011df760172": "6d3dd1599d147291308f0833b9161dcf",
".git/objects/ab/57dac50ca8dfc74428ad362772c8a63b57f6e3": "56d85a07a2d704500e0c794f7dd92e6a",
".git/objects/e5/ea5432abbe851a1dc5f977cb3180ba9cc667e4": "705d4526bf16fb01fd56aa41c7d9275a",
".git/objects/e2/a88be731dc9d212121868eb49c5fb772061ee1": "9a6950a0f41d349932253bcac3a7142f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a3c1f8fd4131464a1f757b5a7f60ef8be8e736": "38694b7a4bf8a8268ac66749c2edf060",
".git/objects/ee/f71fcf97f70ad7223c7e661851c736524de162": "2c8d79e44f1c9f63e0fb8dac50ff41f5",
".git/objects/fd/b6ae8f2e72b57827e7e4cc25c100e66419c629": "059d1c87b85b5ba9d6e49036b91bdf42",
".git/objects/fd/66ba5676b995d2a75caff73601f6aca5eae87c": "00ea1c675abdbd9a00661c7e08daff45",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/8b0b520b393ac154805d8d6aabe99ba1673a13": "6cd249be601b965ec4d2dc8be1812d61",
".git/objects/fb/f8e23059d19357aec37e5c945b5da71b4faa94": "5856ecca396eb666de124f76bb4b8eeb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/70096712229820cf172a300312261b0b019795": "faf75b1c0711def51a384dd1e223b3ae",
".git/objects/42/aac36823fabe327198e2ecbaa28a0f6a3c98be": "8a4de8205e0d402a3349875368dfcb73",
".git/objects/89/3e01582ef5669f474a5d04a1b766ef90b4044a": "4c664c941803d5dacae08afc7e2a457a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/dbbacd7ec074feba67b7f3d4c08f37b427f0ba": "7b52a8cc2b795d2797507133d28da316",
".git/objects/73/94d7f58f3e0c75890a1e9ba633e51c93efdc0d": "eaa808e86a5f4b298dd45fe9bdc26b30",
".git/objects/87/017f2b1d025efed4a7194a61665e58bdb60f9b": "0207b6180660378983fbf2bf3e88ce34",
".git/objects/8a/8223e30942e1eeca8baf675f222a03139a9454": "56556f3e42df6f97fbbf3053e29d9b58",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1d740a10c7b37653c00934f583fc177e928fa8": "b7bc5fb1af15023e9c4f80a67063891d",
".git/objects/26/d145c97567a9ad09fcc3a4f260dd959d6837ff": "6910d07b5f9986fda280dab04bd2ece9",
".git/objects/4d/e1861a17ca4b7b9675196a55e49f0a20ae1ab0": "94565c61bb89e008d54f1379a6173a29",
".git/objects/4d/3601e489a51f2b9285d426bf724852263ec004": "4f544416c433526944982c380a369027",
".git/objects/75/e9f8ebc8148805026421cd6d2025d84b57267e": "f69722767d5a6defc6b7e4afdbdae9ee",
".git/objects/75/a21251d4e810e31f639c18e693371164597ef3": "bf1b76a3932f7706f7d0ca7b0f086cc6",
".git/objects/72/dead27a06c0cc76f56d0830e1e42b9492136d4": "ed255036cfd7efa4cb440c6af76d1bd0",
".git/objects/2f/0d972465edfe512ba0fbba3cc1ab6c9cfa9e98": "4cc57d9d9bcf638641bd6f4075908f98",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/50feee853fe094bc085a1a55a9d26c67689a71": "35ed7f02282ed6ead53948f124364d74",
".git/objects/00/6cb097efe220f0691f6a48f61cb652825b969b": "3f9c884353824fb3061e152b29035126",
".git/objects/9a/a8d20027d1c4e2f17622a1ccb99de68b4bb4e1": "ccfb978c28381446d721e59799b9aa61",
".git/objects/9a/a1904783a3ef86e7c3a7aced29dadad6b9d37b": "c96a1034a163cc676b338fd134417d85",
".git/objects/09/7fc79ef48898b264af378c53c96636e94e627b": "951339fddb1c3272399c88b735b0021c",
".git/objects/31/8395fcbaf482e8f1da11b83f4a9fa56c452174": "0936149260796ebbf034ac17414d09bf",
".git/objects/96/167ad4d20268e52a6cf82918e469c56f6b4719": "f229583a80f5793cf6739b9766026075",
".git/objects/37/0e9917538e27a1e12f65361e29baed8af06957": "8c866c0a2f6fc491a8c93f4f7e9ebda9",
".git/objects/37/78fb4088550d875b137f3a628443318ad3419d": "be259434f1c6bc421b254a199e8511f9",
".git/objects/08/8b95f7b536a0e64d578b71b02b6b493c3fe1fa": "ff75b3de2c5a3ab4df9b3a00faa93b6f",
".git/objects/6d/9e5e2212a26780909ad82c8d2e97f64068870c": "76b0acbf80a51a3013118d6c520d675e",
".git/objects/0a/a7e9a0302f300cc407f4fbd2382d87b45c07cb": "6f97511f9093c3eaee6445992523bfac",
".git/objects/90/1ec285c82d61c0cdcd8987a51412239b97045f": "591fc55f9199da8cf5616339f85a64fe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4cd1964b2fbaf47e645d14c200afea7aa3c962": "a684b8d7a93de6752eca5f200568bedd",
".git/objects/d4/4a2d20af894bf04de15d465e80b0b4f236cf85": "b28b93fd66c5a512d6e60a0aefdddda7",
".git/objects/d4/76ef290fc3a8d427840ca3af8030f65003005b": "fdec9dbccc113ddcf9b39ab00c6fb8a4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/1971cd6a98f6e744e70731651f2d1e64812e81": "093e2f8ced86088278e8273665dbf56b",
".git/objects/b1/f7df64f4eab312b8c7f22ac1ac41989c8742d7": "405596e73ae0d07b9f0c669bc5f82842",
".git/objects/dd/8f96296724a9e315dd6c3714b01fa822eae908": "0298597b21c8ad19bd188c3567d3d6a9",
".git/objects/d5/7cfbcbb456f10b5191e650176331a7e8278aab": "d0ea379bb53cd37a5e7291dfb89f8010",
".git/objects/aa/de7a4587ad974d2d88ba907ea7ee4273896cfa": "3a27f3afbfe135d8ee8239be476543f0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/5aeac625881ec84b0fa4e1b627cd2bb8a27ecb": "0e8554f0fcbdbbf70407c0534bacabce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/9b0b2644354783166c89f1c4344a6880db89bf": "d8d903a778924681316e0943ada66480",
".git/objects/b0/629e3a8d390024bb6e3f30c2bc711b16a190b7": "34f92a221818d93b4da3f2af8f8130b2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b2df2e8041531aecb86725b73cbf2149937551": "e94aad5ac40159e4f5ec9b006dbe2da2",
".git/objects/b9/6c73db422765194dc4912b5bde842d426d22e4": "d17069063770d92f6b1115883dd4b529",
".git/objects/ef/e5e5da97c370874f1fb583d31e134b84e7ff00": "8f203369a4b64c0b496802695746d4e0",
".git/objects/e1/b40fdb50767cfa4644c29bf785b26fc573fa48": "999cc89ed0ded79cfdb472cf4b6307e8",
".git/objects/e1/c7a9d4695088fc291a12add970b2d38c81281d": "e4d8b0be2d1f712e7cc77ea68b5a32dd",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/ee41fed0feb8b6482f0ec6d17bee574c737d93": "f89b7e5917a215e1308f784ac3f89f91",
".git/objects/e6/fb58f4c02da2576353f8bd804419cab632e71f": "29f3b8b96bbe47c55e51da5a91036eaa",
".git/objects/f9/407896c2053144a9b957613b2f455678f5bd37": "043851962870e0e0405b135b43ce1d78",
".git/objects/f9/07f356aef8c8f32734ab5cdb8c71c907447a1e": "33fc1da9d0c8ee3efec764c2011a9640",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/bcacebb2099dda611983fc8cf937f362a4feca": "5ab43e37d168a72c917ac4bd3a469436",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/b517f1218eb101859be37ff89ea65e7dc9f750": "3bd838a9c8e046df42dbad4394bb6c47",
".git/objects/f8/7f89195cef68f3e993c1daeb64d05a133c9222": "b481c9c397034c1560141dc368edc06b",
".git/objects/e0/c75142ff435f80b3a3dcebb72af3d57be6b66a": "d77435a8c31db22370ea5969e48bd648",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ede9ecb815459099fa48c3dbf4f490636466a0": "98ccd1923f3f340d636548ce4388ad81",
".git/objects/2c/76114e3fabf59c26770df92d8b0b47a2032129": "a07b7af29c4413749ab5029708b9a8ac",
".git/objects/70/e908949b124ec738b15d943d0e0cd030874784": "f59d8afbfad035246cea42b5aacc9057",
".git/objects/70/ecb68ced5922bdbce06eca6aef2ba5221ab084": "c8fd116143e2c2c21d036f1b71a572fa",
".git/objects/1e/5512f892ac94daa0e31bf9d6f761a2e4ba5074": "fa574faf6b51f7d6bb05d7b6360961d7",
".git/objects/4a/9dc1c7941a47797f3359655f9af54b2fc6c007": "d69cc36e5bb3a9b7b19c82d803e9ff12",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/28ebb3780b05f9324d11f22de50412e3ea27a1": "3e134da3be6d0bd8565f0fd733e787e3",
".git/objects/23/46c443089f5ad37ef472180f8b2065a37a4385": "a979a5d2c52df2224f6caf3f33dc106b",
".git/objects/8d/2bb3f0af8b9bcfa2a9add897d363e9a39aa8c3": "296d33d8c8e9355ce4079ffd12d7622c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/8e6986dd83e96fd2eed1c10fb3234d59f29d4a": "8d2043a3190cf388b98800c54e3f23fd",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/b530c8b51dee26dc2b46dec766f874fc5a00a4": "a10c3236aa1f80181e822ae29a6c7c1c",
".git/objects/78/03628cabe783f6dd1c688e053bc4f507107594": "e1496bf78209a26b1ea4535d69d5c9bf",
".git/objects/14/c0b5dead85263ebd9b4caf19d08f2718d46eb7": "66e017df41244d840c48edac13cbb091",
".git/objects/14/9117068c04e244055dee2e0793b719f8eaa45b": "618c4ae7b3dae703edade8375c304538",
".git/objects/8e/8369f07dbe8d826845a830c2e33a2c6217d184": "82fb56f257e8d03fac706ff0a285f0cb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f93e879fd7aa647f00b7aa5933bf8af1",
".git/logs/refs/heads/main": "f93e879fd7aa647f00b7aa5933bf8af1",
".git/logs/refs/remotes/origin/main": "4649c9ce991d9732ce9bf60e5d8b2105",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "62af7542c5f438193ddbaa28c7512408",
".git/refs/remotes/origin/main": "62af7542c5f438193ddbaa28c7512408",
".git/index": "b35302f358b8a7c6d8c012f07a79e3be",
".git/COMMIT_EDITMSG": "1b9049144042663047dfa3d723323ecc",
"assets/AssetManifest.json": "607426bbb1354675858e66a85cf86148",
"assets/NOTICES": "bbff4c86816e85f0afca766f84a65c68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8c5d3128cb0849d8949841adbe604c0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "79fa2a33e77bb18ad0d99d2bb7bf3a91",
"assets/fonts/MaterialIcons-Regular.otf": "bd61a6dc33c89bec7812ed2b48c2e239",
"assets/assets/images/test.gif": "f37a48359ab6568139a8bf37c04e1800",
"assets/assets/images/image_welcome4.jpg": "dbb79e0ae4c8a78476110a4f1a52083d",
"assets/assets/images/loginImage.png": "896aac1a0862d9af6cdbd2f18164b047",
"assets/assets/images/image_welcome1.jpg": "5fd625f277bd5211f50d1dfd5db34456",
"assets/assets/images/image_welcome3.jpg": "96beafc33a4130fb36be563423f63c89",
"assets/assets/images/success.gif": "3ddd67c6274a87b4e556df5052266e3f",
"assets/assets/images/image_welcome2.jpg": "f10bf4c005a1c06d3a21b5aced5aca6c",
"assets/assets/images/banner2.jpg": "2d3404f32e5e2316aa373ddaf73a72c5",
"assets/assets/images/banner1.jpg": "22fa94ce7e47695790d4d2f6bac5af2e",
"assets/assets/images/banner0.jpg": "c96456af3e3f8d5042f0982237f4ca7f",
"assets/assets/images/OTPPage.png": "e506af9aa59c149e6e097f9d670279ff",
"assets/assets/images/ForgotPassword.gif": "a51b1c17635145178a552cbe1ee143ac",
"assets/assets/images/NewPassWord.gif": "9bf1851afec6e6f2cf60e3d3ff8d6d48",
"assets/assets/images/nodata.png": "ecd19770a9904d9fbec9203875dc66cc",
"assets/assets/images/avatar.png": "3d1533f776b5edbce3dee9baa994dd17",
"assets/assets/images/logo.png": "39a21fb970054deaffce9b457f418bb4",
"assets/assets/images/registerImage.png": "a140f934d899c43c1192e532aed0bae6",
"assets/assets/images/welcomePage.png": "9fb92afb1eda7a3c3555c36f03bb981d",
"assets/assets/images/register.gif": "bf9c868aa38c6ae169f7e211615962d6",
"assets/assets/images/forgot.png": "84956f0eace65e037289bea6787655c5",
"assets/assets/images/forgotPassword.png": "6a5036db1c48d8b48f9f161def214942",
"assets/assets/icons/news.png": "7514efe630a67fd6f49336c4aa366b67",
"assets/assets/icons/class.png": "d67226f3b6192a6fdda2b916a12cc90f",
"assets/assets/icons/bell.png": "798c477cb5f71dc2b96552fc2dda448c",
"assets/assets/icons/all.jpg": "d04d1a9830036b0e97a70037e4b46218",
"assets/assets/icons/cancel.png": "4854a15a23db464f53599f35ab4ef584",
"assets/assets/icons/successfully.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/icons/gmail.png": "a189ad2bcf2a9214789686f207e73aaf",
"assets/assets/icons/changePassword.png": "a985ffe9104cdf20dc42906ac48c801f",
"assets/assets/icons/old.jpg": "f160d6996e88e2274cce1a008134f9e6",
"assets/assets/icons/present.png": "105571b32bf9a9c390f73da7b70944f9",
"assets/assets/icons/information.png": "b01c41d7703783830bca2834479a34f7",
"assets/assets/icons/student.png": "3c23d20f0c4ae7e95616b25ec5f4a1b2",
"assets/assets/icons/garbage.png": "2a4582b651832b2ea3d049809851972a",
"assets/assets/icons/language.png": "57ae89b0163af0a142543decc948a97e",
"assets/assets/icons/signout.png": "828f3136f8a5f092a63dbbc187002033",
"assets/assets/icons/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/icons/facebook.png": "a662474721ec62bfdfc4e6e881a29cb9",
"assets/assets/icons/notification.png": "43e321c310bbd24af1db695e2524e0e2",
"assets/assets/icons/lectuer.png": "137483918aeb5e9db74eb367732f6c62",
"assets/assets/icons/modeTheme.png": "07757a561814d8a9c9da4bb4fc5d821d",
"assets/assets/icons/absent.png": "47274eedeea77b3c8a28ba27d6ecff7f",
"assets/assets/icons/pending.png": "46cb35a57b7026c5964c1c21c4f13b07",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
