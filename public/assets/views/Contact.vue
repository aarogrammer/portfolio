<template>
 <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted" name="sentMessage" id="contactForm" novalidate >
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Name</label>
                                <input v-validate data-vv-rules="required|min:3" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="form-control" placeholder="Name" id="name" />
                                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>                                                                
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Email Address</label>
                                <input v-validate data-vv-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" name="email" class="form-control" placeholder="Email Address" id="email" />
                                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>  
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" class="form-control" placeholder="Phone Number" id="number" />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Message</label>
                                <textarea v-validate data-vv-rules="required|min:100" :class="{'input': true, 'is-danger': errors.has('message') }" rows="5" name="message" class="form-control" placeholder="Message" id="message"></textarea>
                                <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>    
                            </div>
                        </div>
                        <br>
                        <div id="success"></div>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <button type="submit" class="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      name: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit(e) {
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.submitForm();
        }
    },
    submitForm() {
        
        // Fields to get 
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var message = document.getElementById("message").value;

        // Create our xhr object
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } 
        else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        // Prepare data to send 
        var data = "name=" + name + "&email=" + email + "&number=" + number + "&message=" + message;
        xhr.open("POST", "mail.php", true); 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
        xhr.send(data);
        xhr.onreadystatechange = display_data;

        function display_data() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {   
                    document.getElementById("success").innerHTML = xhr.responseText;
                }
            }
        }
        document.getElementById("contactForm").reset();
      //this.formSubmitted = true // for some reason this was removing the form and not bringing back the xhr response
            
    }
  }
}
</script>