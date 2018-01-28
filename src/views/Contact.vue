<style>
    section.contact .container {
        margin-top: 1.2em;
    }
    section.contact .contact-fields {
        margin-bottom: 20px;
    }
    section.contact .contact-fields span.help {
        color: #8a6d3b;
        background-color: #fcf8e3;
        font-size: 0.8em;
        border-color: #faebcc;
        margin-bottom: 20px;
        padding: 0.5em;
        display: block;
        margin-top: 0.5em;
    }
    section.contact .contact-fields input {
        border-radius: 3px;
        padding: 0.6em;
    }
    section.contact .contact-fields textarea {
        min-height: 150px;
    }
    section.contact .contact-fields span.is-danger {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }
    section.contact .container input, section.contact .container textarea {
        width: 100%;
        display: block;
    }
    section.contact .container input, section.contact .container textarea {
        box-shadow: none;
        resize: none;
    }
    section.contact .container input:focus, section.contact .container textarea:focus {
        border-color: #16a085;
    }
    section.contact .contact-button {
        background: #16a085;
        color: #FFF;
        padding: 0.8em;
    }

    section.contact div#success {
        margin-bottom: 20px;
        font-size: 0.9em;
        display: block;
        margin-top: .5em;
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
    }
    section.contact div#success span {
        padding: 1em;
        display: block;
    }
    section.contact .contact-left-info {
        padding: 1em 0;
        position: relative;
    }
    section.contact .contact-left-info a {
        color: #525252;
        font-weight: bold;
    }
    section.contact .contact-left-info span.data {
        width: 80%;
        display: inline-block;
        margin-left: 10%;
    }
    section.contact .right-content {
        padding: 1em;
    }

    section.contact .contact-left-info span.fa {
        min-width: 32px;
        font-size: 1.2em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    section.contact .social-icons {
        margin-top: 1.5em;
    }
    section.contact .social-icons a .fa {
        color: #525252;
        font-size: 2em;
        margin-right: 1em;
        -webkit-transition: color 0.3s ease;
        -moz-transition: color 0.3s ease;
        -ms-transition: color 0.3s ease;
        -o-transition: color 0.3s ease;
        transition: color 0.3s ease;
    }
    section.contact .social-icons a .fa:hover {
        color: #16a085;
    }
    section.contact button:disabled {
        cursor: not-allowed!important;
    }
</style>

<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page contact">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-12-24">
                        <div class="right-content">
                            <h1>{{content.h1}}</h1>
                            <div v-html="content.copy"></div>
                            <div class="contact-left-info">
                                <a :href="'mailto:' + content.email">
                                    <span title="Email me" aria-hidden class="fa fa-envelope"></span>
                                    <span class="data">{{content.email}}</span>
                                </a>
                            </div>
                            <div class="contact-left-info">
                                <a :href="'tel:' + content.tel">
                                    <span title="Call me" aria-hidden class="fa fa-phone"></span>
                                    <span class="data">{{content.tel}}</span>
                                </a>
                            </div>

                            <div class="social-icons">
                                <a v-for="x in social" :key="x.url" :href="x.url" target="_blank" rel="noopener">
                                    <span class="fa" aria-hidden :class="x.icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pure-u-1 pure-u-md-12-24">
                        <div class="container">
                            <form class="pure-form" @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted" name="sentMessage" id="contactForm" novalidate >
                                <div class="contact-fields">
                                    <input v-validate data-vv-rules="required|min:3" :class="{'input': true, 'is-danger': errors.has('name') }" name="name" placeholder="Name" id="name" />
                                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                                </div>



                                <div class="contact-fields joined">
                                    <div class="pure-g">
                                        <div class="pure-u-1 pure-u-md-12-24">
                                            <input type="tel" name="phone" placeholder="Phone Number" id="number" />
                                        </div>
                                        <div class="pure-u-1 pure-u-md-12-24">
                                            <input v-validate data-vv-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" name="email" placeholder="Email Address" id="email" />
                                        </div>
                                    </div>
                                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                </div>

                                <div class="contact-fields">
                                    <textarea @keyup="countCommentChars" v-model="query.comment" v-validate data-vv-rules="required|min:100" :class="{'input': true, 'is-danger': errors.has('message') }" rows="5" name="message" placeholder="Message" id="message"></textarea>
                                    <span v-show="errors.has('message')" class="help is-danger">The message field must be at least 100 characters <span v-if="query.commentAmount">/ {{query.commentAmount}} typed</span></span>
                                </div>
                                <button v-on:click="isButtonDisabled" v-bind:aria-disabled="query.commentAmount < minComment" v-bind:disabled="query.commentAmount < minComment" class="pure-button pure-input-1 contact-button">Send your message</button>
                                <div v-show="this.buttonDisabled">
                                    test
                                </div>
                                <div id="success"></div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
    import Header from './Header.vue';
    export default {
        mounted: function() {
            this.getContent();
        },
        components: {
            'main-header' : Header
        },
        data () {
            return {
                buttonDisabled: false,
                content: '',
                social: [],
                email: '',
                name: '',
                formSubmitted: false,
                minComment: 100,
                query: {
                    commentAmount: '',
                    comment: ''
                }
            }
        },

        methods: {

            /**
             * @name getContent
             * @since 3.0
             * @description AJAX call to bring in JSON data. Why am I doing it this way? Laziness probably. If I want to make a quick text change I don't want to have to transpile and deploy again.
             */
            getContent: function() {
                this.$http.get('/api/content.json')
                .then((res) => {
                    // Store returned object to variable. Easier to manage.
                    let obj         = res.data.content[0].contact;
                    this.content    = obj;
                    this.social     = obj.social;
                    document.title  = `Aaron Welsh - ${this.content.title}`; // Set DOM title
                 })
                .catch((res) => {
                        console.error(this.$http, `Err: ${ res }`);
                    }
                );
            },
            isButtonDisabled: function() {
               return 'hey'
            },
            /**
             * @name validateBeforeSubmit
             * @since 3.0
             * @param e
             * @description Validate the form before it is submitted.
             */
            validateBeforeSubmit(e) {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.submitForm();
                }
            },

            /**
             * @name countCommentChars
             * @since 3.0
             * @description Count the textarea field and allow submission if more than min amount
             */
            countCommentChars: function() {
                this.query.commentAmount = this.query.comment.length;
            },

            /**
             * @name submitForm
             * @since 3.0
             * @description Get all the fields and process the form.
             */
            submitForm() {

                // Fields to get
                const name      = document.getElementById("name").value;
                const email     = document.getElementById("email").value;
                const number    = document.getElementById("number").value;
                const message   = document.getElementById("message").value;

                const tokenSend = document.getElementById("token").value;

                // Create our xhr object
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                }
                else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                // Prepare data to send
                const data = "name=" + name + "&email=" + email + "&number=" + number + "&message=" + message + "&token=" + tokenSend;
                xhr.open("POST", cy.base_url + "/mail.php", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(data);
                xhr.onreadystatechange = display_data;

                function display_data() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            document.getElementById("success").innerHTML = xhr.responseText;
                        }
                    }
                }
                document.getElementById("contactForm").reset();
            }
        }
    }
</script>