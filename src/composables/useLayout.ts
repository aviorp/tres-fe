import { NavItem } from '@/types';
import { ref, Ref, watch } from 'vue';


/**
 * @variables 
 */

const html = document.querySelector('html') as HTMLHtmlElement;
export const isOpen: Ref<boolean> = ref(true);
export const darkMode: Ref<boolean> = ref(false);
export const isLoading: Ref<boolean> = ref(false);
export const APP_TITLE: Ref<string> = ref('TRES');
export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Transactions',
    to: '/',
  },
  // {
  //   title: 'About',
  //   to: '/about',
  // },
  {
    title: 'Profile',
    to: '/profile',
  }
]


/**
 * @functions 
 */

export const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
}

export const closeDrawer = () => {
  isOpen.value = false;
}


watch(() => darkMode, () => {
  html?.classList.toggle('dark')
})

export const toggleDarkMode = () => {
  html!.style.transition = "background-color 300ms ease";
  html?.classList.contains("dark")
    ? (html!.style.backgroundColor = "#18181b")
    : (html!.style.backgroundColor = "#ffffff");
  darkMode.value = !darkMode.value;

}

