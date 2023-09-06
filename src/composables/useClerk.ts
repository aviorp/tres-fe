import Clerk from '@clerk/clerk-js';
import { computed, ref } from 'vue';
import {
  CLERK_COMPONENT_STYLES
} from '@/utils/constants'

const clerkFrontendApi = 'pk_test_cGxlYXNlZC1pbXBhbGEtMzMuY2xlcmsuYWNjb3VudHMuZGV2JA';


export const clerk = ref<Clerk | null>(null);

export const initAuth = async () => {
  clerk.value = new Clerk(clerkFrontendApi);
  await clerk.value.load();
  console.log('Clerk loaded successfully');
};



export const useAuth = () => {
  if (!clerk.value) {
    throw new Error('Clerk not initialized');
  }
  const user = clerk.value.user;
  const isLoggedIn = computed(() => !!user);

  const mountSignIn = (el: HTMLDivElement) => {
    clerk.value!.mountSignIn(el, {
      appearance: { ...CLERK_COMPONENT_STYLES }
    });
  }

  const mountSignUp = (el: HTMLDivElement) => {
    clerk.value!.mountSignUp(el, {
      appearance: { ...CLERK_COMPONENT_STYLES }
    });
  };

  const logout = async () => {
    await clerk.value!.signOut();
    window.location.reload();
  }
  return {
    user,
    isLoggedIn: !!isLoggedIn.value,
    mountSignIn,
    mountSignUp,
    logout
  }

};