<template>
     <v-dialog v-model="dialog" width="50%" @click:outside="closeDialog">
            <v-card>
              <v-card-title class="headline grey lighten-2">
                Round {{ round }}
              </v-card-title>

              <v-card-text>
                <br />
                <p>Do you really want to end the current round?</p>
                <p>
                  You won't be able to make any changes until the next round has
                  started!
                </p>
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn color="red lighten-2" text @click="closeDialog">
                  <b>Back</b>
                </v-btn>

                <v-btn :color="teamColor" text @click="endRound">
                  <b>End Round</b>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>

<script>

export default {
    props: ['round', 'teamColor'],
    data() {
        return {
            dialog: true
        }
    },
    methods: {
        closeDialog() {
            this.$emit('closeEndRoundModal');
        },
        endRound() {
            this.$emit('endRound');
            // send request to end round
        }
    }
}
</script>
