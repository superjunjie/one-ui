<template>
  <div>
    <h1>图标</h1>
    <p>所有的常用图标。</p>
    <div class="icon-list">
      <h2>line style</h2>
      <one-row>
        <one-col v-for="(iconName, index) in lineStyleTypes" :key="index">
          <div class="icon-wrap">
            <one-icon :icon-name="iconName" :width="40" :height="40"></one-icon>
          </div>
        </one-col>
      </one-row>
      <h2>bold line style</h2>
      <one-row>
        <one-col v-for="(iconName, index) in boildLineStyleTypes" :key="index">
          <div class="icon-wrap">
            <one-icon :icon-name="iconName" :width="40" :height="40"></one-icon>
          </div>
        </one-col>
      </one-row>
      <h2>fill style</h2>
      <one-row>
        <one-col v-for="(iconName, index) in fillStyleTypes" :key="index">
          <div class="icon-wrap">
            <one-icon
              :icon-name="(iconName as iconType)"
              :width="40"
              :height="40"
            ></one-icon>
          </div>
        </one-col>
      </one-row>
      <h2>颜色和大小</h2>
      <p>设置图标的颜色和大小</p>
      <one-row>
        <one-col :span="3" v-for="(size, index) in sizes" :key="index">
          <one-icon
            icon-name="dollar"
            icon-color="#096dd9"
            :width="size"
            :height="size"
          ></one-icon>
        </one-col>
      </one-row>
      <h2>旋转</h2>
      <p>对于 loading 图标，你可以添加 rotate 来让他动起来</p>
      <one-row>
        <one-col :span="3" v-for="(size, index) in sizes" :key="index">
          <one-icon
            icon-name="loading"
            icon-color="#096dd9"
            :width="size"
            :height="size"
            :rotate="true"
          ></one-icon>
        </one-col>
      </one-row>
    </div>
    <h2>自定义图标</h2>
    <p>通过设置自定义 SVG 代码来实现自定义图标。</p>
    <one-row>
      <one-col>
        <one-icon icon-color="#9f1221" width="32" height="32">
          <path
            d="M23.9623438,12.3350121 C24.1579467,5.49646489 18.6224891,-0.0978595642 11.8052688,0.00127845036 C5.24391283,0.0966973366 -0.0498595642,5.51546731 0.000348668281,12.0773462 C0.036377724,16.7792542 2.78045521,20.8361259 6.74969492,22.7663535 C6.97929298,22.8779855 7.24509443,22.7044068 7.23550605,22.4492397 C7.20656659,21.6782179 7.23149637,20.8539661 7.38578208,20.1913801 C7.53762712,19.5389637 8.1334431,17.016 8.52517191,15.3586053 C8.71583535,14.5517288 8.73884746,13.7138789 8.58531719,12.8990993 C8.53493462,12.6317288 8.49844068,12.3176368 8.49844068,11.9685617 C8.49844068,10.197385 9.52503632,8.87500242 10.8033123,8.87500242 C11.8900533,8.87500242 12.4150315,9.69094431 12.4150315,10.6693075 C12.4150315,11.7622082 11.7191477,13.396184 11.3600194,14.9105085 C11.0599322,16.1783826 11.9958741,17.2123002 13.2463148,17.2123002 C15.5103341,17.2123002 17.2505956,14.8250847 17.2505956,11.3791961 C17.2505956,8.32933656 15.0590993,6.19688136 11.9298596,6.19688136 C8.3055109,6.19688136 6.17811138,8.91538983 6.17811138,11.7248426 C6.17811138,12.8196029 6.59988378,13.9936271 7.12608232,14.6318063 C7.23010169,14.757908 7.2454431,14.8684939 7.21446973,14.9971525 C7.1177724,15.3995157 6.90287651,16.2647361 6.86068765,16.4417433 C6.80507506,16.6749443 6.6760678,16.724339 6.43473123,16.6121259 C4.84369976,15.8715545 3.84912349,13.5456465 3.84912349,11.6773656 C3.84912349,7.65913801 6.76858111,3.96906538 12.265569,3.96906538 C16.6843584,3.96906538 20.1183923,7.1177724 20.1183923,11.325908 C20.1183923,15.7159322 17.3503729,19.2489879 13.5083971,19.2489879 C12.4931332,19.2489879 11.5256368,18.8340726 10.9568426,18.2714964 C10.7819274,18.0984988 10.4861985,18.1772978 10.4237869,18.4152639 C10.223477,19.1784407 9.89968039,20.4129007 9.79537046,20.8143341 C9.60755448,21.5366005 9.21175787,22.3778208 8.81497337,23.110431 C8.70955932,23.3051041 8.8161937,23.545569 9.03079903,23.5999613 C10.0103826,23.8483874 11.0378499,23.9766392 12.0969879,23.9668184 C18.3851622,23.9084746 23.7825472,18.6209782 23.9623438,12.3350121 Z"
          ></path>
        </one-icon>
      </one-col>
    </one-row>
  </div>
</template>

<script lang="ts" setup>
import { OneRow, OneCol, OneIcon, iconType } from '../src'
const lineStyleTypes: iconType[] = [
  'upload',
  'cancel',
  'agree',
  'calendar',
  'comment',
  'filter',
  'delete',
  'download',
  'draw',
  'edit',
  'note',
  'notice',
  'question',
  'search',
  'setting',
  'eye',
  'eye-close',
  'revoke',
  'add',
  'minus',
  'archive',
  'chat',
  'right-arrow',
  'file-pdf',
  'success-line',
  'error-line',
  'phone',
  'moment',
  'secure-message',
  'task-list',
  'copy',
  'user',
  'info-line',
  'unfinished-line',
  'wraning-line',
  'copys',
  'left-arrow',
  'dollar',
  'flag',
  'new-flag',
  'more-line',
  'exchange',
  'right-round',
  'file-excel',
  'file-image',
  'file-text',
  'file-unkonw',
  'file-word',
  'unlock',
  'lock',
  'mail',
  'print',
  'reload',
  'star-close',
  'star',
  'menu',
  'list-item',
  'chart-bar',
  'direction-bottom',
  'direction-top',
  'line-bank',
  'line-cap',
  'line-deploy',
  'line-finger',
  'line-file',
  'line-view',
  'line-reject',
  'line-safety',
  'line-wallet',
  'issue',
  'line-primary'
]
const boildLineStyleTypes: iconType[] = [
  'loading',
  'arrow-left',
  'arrow-right',
  'arrow-top',
  'arrow-bottom',
  'double-arrow-left',
  'double-arrow-right',
  'check',
  'indeterminate',
  'sort',
  'bold-success',
  'bold-error',
  'bold-info',
  'bold-warning',
  'bold-unfinished',
  'bold-plus',
  'bold-close'
]
const fillStyleTypes = [
  'warning',
  'error',
  'success',
  'info',
  'bank-solid',
  'dollar-solid',
  'flag-solid',
  'fill-primary',
  'label-solid',
  'star-solid',
  'fill-detail',
  'fill-address',
  'fill-primary-01',
  'fill-home'
]

const sizes = [64, 56, 48, 40, 32, 24, 16]
</script>

<style lang="less">
.icon-list {
  margin-bottom: 10px;
  button {
    margin-right: 10px;
  }
}

.icon-wrap {
  padding: 10px;
}
</style>
