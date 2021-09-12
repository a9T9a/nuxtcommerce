<template>
    <div class="footerContainer">
        <div class="footerContent">
            <div class="infoArea">
                <div class="rowOne">
                    <span class="brandHeader">Udemy Shop</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias tempora sint suscipit illo ipsum quis consequatur quia perspiciatis numquam est dolores hic</p>
                    <span class="phoneText">Phone : +90 000 000 0000</span>
                    <span>help@udemyshop.com</span>
                    <br>
                    <div style="display:flex; flex-direction:row; margin-top:20px;">
                        <img class="imgInstagram" src="../src/images/social/facebook.png">
                        <img class="imgInstagram" src="../src/images/social/instagram.png">
                        <img class="imgInstagram" src="../src/images/social/twitter.png">
                    </div>
                </div>
                <div class="rowTwo">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div class="rowThree">
                    <h3>Help</h3>
                    <div>
                        <h3>Payment</h3>
                    </div>
                </div>
            </div>
            <div class="bottomArea">
                <div>
                    <span class="bottomAreaText">Terms and Conditions</span>
                    <span class="bottomAreaText">Privacy Policy</span>
                </div>
                <span class="copyrightText">@2020 All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footerContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 0;
        bottom: 0;
        background-color: #333C35;
        width: 100%;
        height: auto;
        color: white;
        margin: 0;
        padding: 0;
    }
    .footerContent{
        width: 80%;
    }
    .infoArea{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80%;
    }
    .rowOne{
        width: 30%;
        padding: 20px;
        font-family: Arial, Arial, Helvetica, sans-serif;
    }
    .brandHeader{
        font-size: 22px;
        font-weight: 700;
    }
    h3{
        font-size: 22px;
    }
    img{
        height: 15px;
        overflow: hidden;
        width: auto;
        object-fit: contain;
        margin-right: 10px;
    }
    .imgInstagram{
        width: 68px;
        height: 60px;
    }
    .rowTwo{
        padding: 20px;
        width: 40%;
    }
    .rowThree{
        padding: 20px;
        width: 30%;
    }
    .bottomArea{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bottomAreatext{
        padding: 30px;
    }
    .copyrightText{
        margin-top: 15px;
    }
</style>