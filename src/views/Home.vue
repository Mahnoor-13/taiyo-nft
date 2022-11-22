<template>
  <div class="home">
    <div class="home-top">
      <div class="note-div">
        <p class="note-text">Note</p>
        <p class="note-paragraph">
          Like and retweet the tweets below, in order to win some rewards. After
          the end period for each tweet has passed, come back and check if you
          have won the raffle, if so then claim your reward!
        </p>
      </div>
      <div class="address-div">
        <button class="address-btn">5pzw...ee3</button>
      </div>
    </div>

    <div>
      <MDBTabs v-model="activeTabId1">
        <div class="tabs">
          <!-- Tabs navs -->
          <MDBTabNav>
            <MDBTabItem tabId="ex1-1" href="ex1-1"
              ><div class="hi">
                <div>
                  <span class="tab3">Live</span>
                </div>
                <div class="quantity">
                  <span class="quantity-text">0</span>
                </div>
              </div></MDBTabItem
            >
            <MDBTabItem tabId="ex1-2" href="ex1-2">
              <div class="hi">
                <div>
                  <span class="tab3">Expired</span>
                </div>
                <div class="quantity">
                  <span class="quantity-text">0</span>
                </div>
              </div></MDBTabItem
            >
            <MDBTabItem tabId="ex1-3" href="ex1-3">
              <div class="hi">
                <div>
                  <span class="tab3">Claimed</span>
                </div>
                <div class="quantity">
                  <span class="quantity-text">0</span>
                </div>
              </div></MDBTabItem
            >

            <MDBTabItem tabId="ex1-4" href="ex1-3">
              <div class="hi">
                <div>
                  <span class="tab3">Unclaimed</span>
                </div>
                <div class="quantity">
                  <span class="quantity-text">0</span>
                </div>
              </div></MDBTabItem
            >
          </MDBTabNav>
        </div>
        <div class="bottom-border" />
        <div>
          <p class="start-claiming-text">
            In order to start claiming rewards, you must link your twitter
            through the account page.
          </p>
          <p class="start-claiming-text">Featured Tweets 🔥</p>
        </div>

        <MDBTabContent>
          <MDBTabPane tabId="ex1-1">
            <div class="table">
              <div class="first_portion">
                <p class="user-heading">User</p>
                <p class="end">Ends In</p>
                <p class="reward-heading">Reward</p>
                <p class="total_reward-heading">Total Rewards Available</p>
                <p class="claim-heading">Claim Type</p>
                <p class="requirements-heading">Requirementss</p>
                <p class="status-heading">Status</p>
                <p class="tweet-heading">Tweet</p>
              </div>
              <div class="bottom-border" />

              <div class="first_portion">
                <div class="user">
                  <img src="@/assets/images/user.png" /> SolBookieNFT
                </div>
                <p class="end2">Ends in 10h 19m 13s</p>
                <p class="reward">1 FORGE</p>
                <p class="total_reward">500 FORGE</p>
                <p class="claim">Raffle</p>
                <p class="requirements">Like & RT</p>
                <div class="status">
                  <p class="quantity2">
                    <span class="quantity-text2">Live</span>
                  </p>
                </div>
                <div class="tweet">
                  <img src="@/assets/images/blue-twitter.png" />
                </div>
              </div>

              <div class="bottom-border" />

              <div class="first_portion">
                <div class="user">
                  <img  src="@/assets/images/user.png" /> SolBookieNFT
                </div>
                <p class="end2">Ends in 10h 19m 13s</p>
                <p class="reward">1 FORGE</p>
                <p class="total_reward">500 FORGE</p>
                <p class="claim">Raffle</p>
                <p class="requirements">Like & RT</p>
                <div class="status">
                  <p class="quantity2">
                    <span class="quantity-text2">Live</span>
                  </p>
                </div>
                <div class="tweet">
                  <img src="@/assets/images/blue-twitter.png" />
                </div>
              </div>

              <div class="bottom-border" />

              <div class="first_portion">
                <div class="user">
                  <img src="@/assets/images/user.png" /> SolBookieNFT
                </div>
                <p class="end2">Ends in 10h 19m 13s</p>
                <p class="reward">1 FORGE</p>
                <p class="total_reward">500 FORGE</p>
                <p class="claim">Raffle</p>
                <p class="requirements">Like & RT</p>
                <div class="status">
                  <p class="quantity2">
                    <span class="quantity-text2">Live</span>
                  </p>
                </div>
                <div class="tweet">
                  <img src="@/assets/images/blue-twitter.png" />
                </div>
              </div>

              <div class="bottom-border" />

              <div class="first_portion">
                <div class="user">
                  <img src="@/assets/images/user.png" /> SolBookieNFT
                </div>
                <p class="end2">Ends in 10h 19m 13s</p>
                <p class="reward">1 FORGE</p>
                <p class="total_reward">500 FORGE</p>
                <p class="claim">Raffle</p>
                <p class="requirements">Like & RT</p>
                <div class="status">
                  <p class="quantity2">
                    <span class="quantity-text2">Live</span>
                  </p>
                </div>
                <div class="tweet">
                  <img src="@/assets/images/blue-twitter.png" />
                </div>
              </div>

              <div class="bottom-border" />

              <div class="first_portion">
                <div class="user">
                  <img src="@/assets/images/user.png" /> SolBookieNFT
                </div>
                <p class="end2">Ends in 10h 19m 13s</p>
                <p class="reward">1 FORGE</p>
                <p class="total_reward">500 FORGE</p>
                <p class="claim">Raffle</p>
                <p class="requirements">Like & RT</p>
                <div class="status">
                  <p class="quantity2">
                    <span class="quantity-text2">Live</span>
                  </p>
                </div>
                <div class="tweet">
                  <img src="@/assets/images/blue-twitter.png" />
                </div>
              </div>

              <div class="bottom-border" />
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="ex1-2">Content #2</MDBTabPane>
          <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
          <MDBTabPane tabId="ex1-4">UnClaimed #3</MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
      </MDBTabs>
    </div>
  </div>
</template>
<script>
import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  },
  setup() {
    const activeTabId1 = ref("ex1-1");

    return {
      activeTabId1,
    };
  },
};
</script>

<style scoped lang="css">
.nav-tabs {
  list-style: none !important;
  display: flex;
}
.tabs {
  margin-left: -80px;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.tab3 {
  margin-left: 40px;
  font-size: 15px;
}
.hi {
  display: flex !important;
  align-items: center;
}
.quantity {
  height: 17px;
  background: var(--blue);
  width: 27px;
  display: flex;
  justify-content: center;
  border-radius: 17px;
  margin-left: 10px;
  margin-top: 4px;
}
.quantity2 {
  height: 20px;
  background: var(--blue);
  width: 38px;
  display: flex;
  justify-content: center;
  border-radius: 17px;
  align-items: center;
}
.quantity-text {
  text-align: center;
  font-size: 12px !important;
}

.quantity-text2 {
  text-align: center;
  font-size: 10px !important;
}
.bottom-border {
  border-bottom: 1px solid;
}
.start-claiming-text {
  font-size: 12px;
}
.table {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;

  border-radius: 10px;
  padding-bottom: 20px;
}
.first_portion {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
}
.second_portion {
  width: 100%;
  display: flex;
}

.user {
  font-size: 13px;
  width: 15%;
  display: flex;
  align-items: center;
}
.user-heading {
  font-size: 13px;
  width: 15%;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.end {
  font-size: 13px;
  width: 15%;
  font-weight: bold;
}
.end2 {
  font-size: 11px;
  width: 15%;
}
.reward {
  font-size: 13px;
  width: 10%;
}
.total_reward {
  font-size: 13px;
  width: 18%;
}
.claim {
  font-size: 13px;
  width: 10%;
}
.requirements {
  font-size: 13px;
  width: 10%;
}
.status {
  font-size: 13px;
  width: 5%;
}
.tweet {
  font-size: 13px;
  width: 5%;
}

.reward-heading {
  font-size: 13px;
  width: 10%;
  font-weight: bold;
}
.total_reward-heading {
  font-size: 13px;
  width: 18%;
  font-weight: bold;
}
.claim-heading {
  font-size: 13px;
  width: 10%;
  font-weight: bold;
}
.requirements-heading {
  font-size: 13px;
  width: 10%;
  font-weight: bold;
}
.status-heading {
  font-size: 13px;
  width: 5%;
  font-weight: bold;
}
.tweet-heading {
  font-size: 13px;
  width: 5%;
  font-weight: bold;
}

.solbookienft {
  font-size: 11px;
  width: 20%;
}
.validating {
  font-size: 9px;
  width: 20%;
}
.forge {
  font-size: 11px;
  width: 10%;
}
.second_forge {
  font-size: 11px;
  width: 10%;
}
.raffle {
  font-size: 11px;
  width: 10%;
}
.like {
  font-size: 11px;
  width: 10%;
}
.live {
  font-size: 11px;
  width: 10%;
}

.icon {
  font-size: 11px;
  width: 10%;
}
</style>
