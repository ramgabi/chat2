let menulist = {
    data() {
        return {

        }
    },
    template:`
    <li class="menu-item"><a href="#" class="home"><h2>홈</h2></a></li>
    `
}

let roomlist = {
    data() {
        return  {
            full: false,
        }
    },
    template:`
       <li></li>
       `
}

let userlist = {
    props: [
        'title'
    ],
    data() {
        return {
            active: false
        }
    },
    template: `
    <div>
        <h4 class="group-tit" :class="{off : !active}">
            <a href="#" @click.prevent="active = !active">User</a>
        </h4>
        <ul class="user-list" v-show="active">
            <li class="user-item user-owner">
                <a href="#">
                    <span class="user-profile"></span>
                    <span class="user-name">닉네임</span>
                </a>
            </li>
            <li class="user-item">
                <a href="#">
                    <span class="user-profile"></span>
                    <span class="user-name">닉네임</span>
                </a>
            </li>
            <li class="user-item">
                <a href="#">
                    <span class="user-profile"></span>
                    <span class="user-name">닉네임</span>
                </a>
            </li>
        </ul>
    </div>
    `
}

new Vue({
    el: '.app-wrap',
    
    created() {
        
    },
    components: {
        roomlist,
        userlist,
        menulist
    },
    data: {
        showModal: false,
        roomName : null,
        roomUserCount: 1,
        roomItems: [
            {num : 1,
                tit : '제목입니다',
                own : '방방장장',
                userNowNum : 3,
                userNum : 5},
            {num : 2,
                tit : '제목입니sasdsafasfasfsaf다',
                own : '방장',
                userNowNum : 43,
                userNum : 50},
            {num : 3,
                tit : '제입니다',
                own : '방장장',
                userNowNum : 1,
                userNum : 3}
        ],
        groupItems: [
            {
                tit : 'User',
                own : '방방장장',
                userlist : [
                    '함수',
                    'lenove',
                    '이벤트바인딩'
                ]
            },
            {
                tit : 'Group1',
                own : '방방장장',
                userlist : [
                    '1252324',
                    '랄라',
                    '도움말도움말'
                ]
            },
            {
                tit : 'Group2',
                own : '방방장장',
                userlist : [
                    '객체가아니라id',
                    'renderingComplete'
                ]
            },
        ]
    },
    methods: {
        openModal: function() {
            this.showModal = true
        },
        closeModal: function() {
            this.showModal = false
        },
        checkNum: function() {
            console.log(this.userCount)
            // userCount < 2 ? userCount = 2 : userCount > 99 ? userCount = 99 : userCount 
        },
        createRoom: function() {
            const newRoom = {
                num : this.roomItems.length + 1,
                tit : this.roomName,
                own : 'test',
                userNowNum : 0,
                userNum : this.roomUserCount
            }
            this.roomItems.push(newRoom)
            this.resetNewRoomModal()
        },
        resetNewRoomModal: function() {
            this.roomName = null
            this.roomUserCount = 1

            this.closeModal()
        }
    },
    filters: {
        formatRoomNum: function(num) {
            return String(num).padStart(3, 0)
        }
    }
})