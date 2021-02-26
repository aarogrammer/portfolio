<template>
    <div class="pure-g">
        <div class="pure-u-1-1 pure-u-md-24-24 pure-u-xs-24-24">
            <nav class="nav pure-menu pure-menu-horizontal header-can-transform">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item">
                        <router-link to="/" active-class="active" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/about" active-class="active">
                            About
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>