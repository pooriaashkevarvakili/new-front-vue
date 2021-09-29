/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Hacoupian - Technology Dep.
  Author: Ahmadreza Azizan

==========================================================================================*/
import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import auth from "./modules/auth";
import tasks from "./modules/tasks";
import notify from "./modules/notify";
import interview from "./modules/interview";
import dashboard from "./modules/dashboard";
import getAllApplicant from "./modules/getAllApplicant";
import confirmforinterview from "./modules/confirmForInterView";
import age from "./modules/age";
import recruitment from "./modules/recruitment";
import completionofdocuments from "./modules/completionofdocument";
import joboffer from "./modules/joboffer";
import statusResume from "./modules/statusResume";
import education from "./modules/education";
import images from "./modules/images";
import skill from "./modules/skill";
import interviews from "./modules/interviews";
import location from "./modules/location";
import introductionLetter from "./modules/introductionLetter";
import disappRoval from "./modules/disappRoval";
import rejectTheApplicant from "./modules/rejectTheApplicant";
import resume from "./modules/resume";
import title from "./modules/title";
import completionofdocumentsmodal from "./modules/completionofdocumentsmodal";
import user from "./modules/user";
import skillForm from "./modules/SkillForm";
import datarequesttable from "./modules/datarequesttable";
import departeman from "./modules/departeman";
import job from "./modules/job";
import semat from "./modules/semat";
import mahal from "./modules/mahal";
import history from "./modules/history";
import sex from "./modules/sex";
import search from "./modules/search";
import elat from "./modules/elat";
import hoghugh from "./modules/hoghugh";
import modat from "./modules/modat";
import titlejobs from "./modules/titleJobs";
import status from "./modules/status";
import andiactor from "./modules/andiactor";
import leterfile from "./modules/leterfile";
import howsend from "./modules/howsend";
import place from "./modules/place";
import deleviry from "./modules/deleviry";
import addApplicantFormSkills from "./modules/addApplicantFormSkills";
import interviewCalendar from "./modules/interviewCalendar";
import formTabs from "./modules/formTabs";
import applicants from "./modules/applicants";
import titleLetter from "./modules/titleLetter";
import modalsabetbasicinformation from "./modules/modalsabetbasicInformation";
import drawerForm from "./modules/drawerForm";
import drawerFormOne from "./modules/drawerFormOne";
import officeResume from "./modules/officeResume";
import searchs from "./modules/searchs";
import searchTitle from "./modules/searchTitle";
import searchJob from "./modules/searchJob";
export default createStore({
  getters,
  mutations,
  state,
  actions,
  modules: {
    titlejobs,
    titleLetter,
    searchTitle,
    deleviry,
    searchJob,
    officeResume,
    modalsabetbasicinformation,
    howsend,
    place,
    andiactor,
    formTabs,
    semat,
    drawerFormOne,
    status,
    sex,
    leterfile,
    interviewCalendar,
    applicants,
    search,
    completionofdocumentsmodal,
    addApplicantFormSkills,
    job,
    hoghugh,
    modat,
    elat,
    images,
    mahal,
    departeman,
    history,
    resume,
    user,
    title,
    education,
    disappRoval,
    auth,
    skillForm,
    location,
    introductionLetter,
    datarequesttable,
    notify,
    drawerForm,
    getAllApplicant,
    interview,
    interviews,
    dashboard,
    age,
    joboffer,
    recruitment,
    tasks,
    skill,
    rejectTheApplicant,
    statusResume,
    confirmforinterview,
    completionofdocuments,
    searchs,
  },
  strict: import.meta.env.NODE_ENV !== "production",
});
