/* eslint-disable no-unused-vars */
import {initExtension} from '../reducers/cc-extension';
import {
    addLocales,
    updateLocale
} from '../reducers/locales';

const inlineblock = 'data:text/javascript;base64,LyoqCiAqIE9yaWdpbmFsIG5vbi1mdW5jdGlvbmFsIHByb29mIG9mIGNvbmNlcHQgYnkgTGlseU1ha2VzVGhpbmdzCiAqLwoKKGZ1bmN0aW9uIChTY3JhdGNoKSB7CgkidXNlIHN0cmljdCI7CgoJaWYgKCFTY3JhdGNoLmV4dGVuc2lvbnMudW5zYW5kYm94ZWQpIHsKCQl0aHJvdyBuZXcgRXJyb3IoIklubGluZSBCbG9ja3MgbXVzdCBydW4gdW5zYW5kYm94ZWQiKTsKCX0KCgljb25zdCB2bSA9IFNjcmF0Y2gudm07Cgljb25zdCBydW50aW1lID0gdm0ucnVudGltZTsKCglpZiAoISh2bS5leHBvcnRzLklSR2VuZXJhdG9yICYmIHZtLmV4cG9ydHMuSlNHZW5lcmF0b3IpKSB7CgkJY29uc29sZS5lcnJvcigiVk0gaXMgdG9vIG9sZCwgdGhlIElubGluZSBCbG9ja3MgZXh0ZW5zaW9uIHdpbGwgb25seSB3b3JrIHdpdGggdGhlIGNvbXBpbGVyIGRpc2FibGVkLlxuUGxlYXNlIGNvbXBpbGUgdGhlIEdVSSB3aXRoIHRoZSBWTSBQUiBodHRwczovL2dpdGh1Yi5jb20vVHVyYm9XYXJwL3NjcmF0Y2gtdm0vcHVsbC8xNDEiKTsKCX0KCgljb25zdCBleElkID0gImNzdGxtc0lubGluZSI7CgoJY29uc3QgUEFUQ0hFU19JRCA9ICJfX3BhdGNoZXNfIiArIGV4SWQ7Cgljb25zdCBwYXRjaCA9IChvYmosIGZ1bmN0aW9ucykgPT4gewoJCWlmIChvYmpbUEFUQ0hFU19JRF0pIHJldHVybjsKCQlvYmpbUEFUQ0hFU19JRF0gPSB7fTsKCQlmb3IgKGNvbnN0IG5hbWUgaW4gZnVuY3Rpb25zKSB7CgkJCWNvbnN0IG9yaWdpbmFsID0gb2JqW25hbWVdOwoJCQlvYmpbUEFUQ0hFU19JRF1bbmFtZV0gPSBvYmpbbmFtZV07CgkJCWlmIChvcmlnaW5hbCkgewoJCQkJb2JqW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHsKCQkJCQljb25zdCBjYWxsT3JpZ2luYWwgPSAoLi4uYXJncykgPT4gb3JpZ2luYWwuY2FsbCh0aGlzLCAuLi5hcmdzKTsKCQkJCQlyZXR1cm4gZnVuY3Rpb25zW25hbWVdLmNhbGwodGhpcywgY2FsbE9yaWdpbmFsLCAuLi5hcmdzKTsKCQkJCX07CgkJCX0gZWxzZSB7CgkJCQlvYmpbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykgewoJCQkJCXJldHVybiBmdW5jdGlvbnNbbmFtZV0uY2FsbCh0aGlzLCAoKSA9PiB7IH0sIC4uLmFyZ3MpOwoJCQkJfQoJCQl9CgkJfQoJfQoJY29uc3QgdW5wYXRjaCA9IChvYmopID0+IHsKCQlpZiAoIW9ialtQQVRDSEVTX0lEXSkgcmV0dXJuOwoJCWZvciAoY29uc3QgbmFtZSBpbiBvYmpbUEFUQ0hFU19JRF0pIHsKCQkJb2JqW25hbWVdID0gb2JqW1BBVENIRVNfSURdW25hbWVdOwoJCX0KCQlvYmpbUEFUQ0hFU19JRF0gPSBudWxsOwoJfQoKCS8vIEZpeCByZXBvcnQgYnViYmxlCglwYXRjaChydW50aW1lLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgewoJCXZpc3VhbFJlcG9ydChvcmlnaW5hbCwgYmxvY2tJZCwgdmFsdWUpIHsKCQkJaWYgKHZtLmVkaXRpbmdUYXJnZXQpIHsKCQkJCWNvbnN0IGJsb2NrID0gdm0uZWRpdGluZ1RhcmdldC5ibG9ja3MuZ2V0QmxvY2soYmxvY2tJZCk7CgkJCQlpZiAoYmxvY2sub3Bjb2RlID09PSAoZXhJZCArICJfaW5saW5lIikgJiYgIWJsb2NrLnRvcExldmVsKSByZXR1cm47CgkJCX0KCQkJb3JpZ2luYWwoYmxvY2tJZCwgdmFsdWUpOwoJCX0KCX0pOwoKCS8vIENvbXBpbGVyIHN1cHBvcnQKCXZtLmVuYWJsZURlYnVnKCk7CglpZiAodm0uZXhwb3J0cy5JUkdlbmVyYXRvciAmJiB2bS5leHBvcnRzLkpTR2VuZXJhdG9yKSB7CgkJY29uc3QgSVJHZW5lcmF0b3IgPSB2bS5leHBvcnRzLklSR2VuZXJhdG9yOwoJCWNvbnN0IEpTR2VuZXJhdG9yID0gdm0uZXhwb3J0cy5KU0dlbmVyYXRvcjsKCQljb25zdCBTY3JpcHRUcmVlR2VuZXJhdG9yID0gSVJHZW5lcmF0b3IuZXhwb3J0cy5TY3JpcHRUcmVlR2VuZXJhdG9yOwoJCWNvbnN0IHsgRnJhbWUsIFR5cGVkSW5wdXQsIFRZUEVfVU5LTk9XTiB9ID0gSlNHZW5lcmF0b3IuZXhwb3J0czsKCgkJcGF0Y2goU2NyaXB0VHJlZUdlbmVyYXRvci5wcm90b3R5cGUsIHsKCQkJZGVzY2VuZFN0YWNrZWRCbG9jayhvcmlnaW5hbCwgYmxvY2spIHsKCQkJCWlmIChibG9jay5vcGNvZGUgPT09IChleElkICsgIl9pbmxpbmUiKSkgewoJCQkJfSBlbHNlIGlmIChibG9jay5vcGNvZGUgPT09IChleElkKSArICJfcmV0dXJuIikgewoJCQkJCXJldHVybiB7CgkJCQkJCWtpbmQ6IGV4SWQgKyAiLnJldHVybiIsCgkJCQkJCXZhbHVlOiB0aGlzLmRlc2NlbmRJbnB1dE9mQmxvY2soYmxvY2ssICJWQUxVRSIpCgkJCQkJfTsKCQkJCX0KCQkJCXJldHVybiBvcmlnaW5hbChibG9jayk7CgkJCX0sCgkJCS8vIGlubGluZSB7fSBjYW4gYmUgdXNlZCBib3RoIGFzIGEgc3RhY2sgKHRvcC1sZXZlbCkgYW5kIHJlcG9ydGVyIChpbiBpbnB1dCkKCQkJZGVzY2VuZElucHV0KG9yaWdpbmFsLCBibG9jaykgewoJCQkJaWYgKGJsb2NrLm9wY29kZSA9PT0gKGV4SWQgKyAiX2lubGluZSIpKSB7CgkJCQkJcmV0dXJuIHsKCQkJCQkJa2luZDogZXhJZCArICIuaW5saW5lIiwKCQkJCQkJc3RhY2s6IHRoaXMuZGVzY2VuZFN1YnN0YWNrKGJsb2NrLCAiU1VCU1RBQ0siKQoJCQkJCX07CgkJCQl9CgkJCQlyZXR1cm4gb3JpZ2luYWwoYmxvY2spOwoJCQl9LAoJCX0pOwoKCQlwYXRjaChKU0dlbmVyYXRvci5wcm90b3R5cGUsIHsKCQkJZGVzY2VuZFN0YWNrZWRCbG9jayhvcmlnaW5hbCwgbm9kZSkgewoJCQkJaWYgKG5vZGUua2luZCA9PT0gKGV4SWQgKyAiLmlubGluZSIpKSB7CgkJCQkJdGhpcy5zb3VyY2UgKz0gYHRyeSB7XG5gOwoJCQkJCXRoaXMuZGVzY2VuZFN0YWNrKG5vZGUuc3RhY2ssIG5ldyBGcmFtZShmYWxzZSkpOwoJCQkJCXRoaXMuc291cmNlICs9IGByZXR1cm4gIiI7XG5gOwoJCQkJCXRoaXMuc291cmNlICs9IGB9IGNhdGNoIChlKSB7XG5gOwoJCQkJCXRoaXMuc291cmNlICs9IGBpZiAoIWUuaW5saW5lUmV0dXJuKSB0aHJvdyBlO1xuYDsKCQkJCQl0aGlzLnNvdXJjZSArPSBgcmV0dXJuIGUudmFsdWU7XG5gOwoJCQkJCXRoaXMuc291cmNlICs9IGB9XG5gOwoJCQkJfSBlbHNlIGlmIChub2RlLmtpbmQgPT09IChleElkICsgIi5yZXR1cm4iKSkgewoJCQkJCXRoaXMuc291cmNlICs9IGB0aHJvdyB7aW5saW5lUmV0dXJuOiB0cnVlLCB2YWx1ZTogJHt0aGlzLmRlc2NlbmRJbnB1dChub2RlLnZhbHVlKS5hc1NhZmUoKX19XG5gOwoJCQkJfSBlbHNlIHsKCQkJCQlvcmlnaW5hbChub2RlKTsKCQkJCX0KCQkJfSwKCQkJLy8gaW5saW5lIHt9IGNhbiBiZSB1c2VkIGJvdGggYXMgYSBzdGFjayAodG9wLWxldmVsKSBhbmQgcmVwb3J0ZXIgKGluIGlucHV0KQoJCQlkZXNjZW5kSW5wdXQob3JpZ2luYWwsIG5vZGUpIHsKCQkJCWlmIChub2RlLmtpbmQgPT09IChleElkICsgIi5pbmxpbmUiKSkgewoJCQkJCS8vIGJpZyBoYWNrCgkJCQkJY29uc3Qgb2xkU3JjID0gdGhpcy5zb3VyY2U7CgkJCQkJdGhpcy5kZXNjZW5kU3RhY2sobm9kZS5zdGFjaywgbmV3IEZyYW1lKGZhbHNlKSk7CgkJCQkJY29uc3Qgc3RhY2tTcmMgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcob2xkU3JjLmxlbmd0aCk7CgkJCQkJdGhpcy5zb3VyY2UgPSBvbGRTcmM7CgoJCQkJCXJldHVybiBuZXcgVHlwZWRJbnB1dCgKCQkJCQkJYCh5aWVsZCogKGZ1bmN0aW9uKigpIHsKCQkJCQkJCXRyeSB7CgkJCQkJCQkJJHtzdGFja1NyY307CgkJCQkJCQkJcmV0dXJuICIiOwoJCQkJCQkJfSBjYXRjaCAoZSkgewoJCQkJCQkJCWlmICghZS5pbmxpbmVSZXR1cm4pIHRocm93IGU7CgkJCQkJCQkJcmV0dXJuIGUudmFsdWU7CgkJCQkJCQl9CgkJCQkJCQl9KSgpCgkJCQkJCSlgLAoJCQkJCQlUWVBFX1VOS05PV04KCQkJCQkpOwoJCQkJfQoJCQkJcmV0dXJuIG9yaWdpbmFsKG5vZGUpOwoJCQl9LAoJCQkvLyBFcnJvciBoYW5kbGluZyBmb3Igd2hlbiByZXR1cm5pbmcgYXQgdGhlIHRvcCBsZXZlbAoJCQlkZXNjZW5kU3RhY2sob3JpZ2luYWwsIG5vZGVzLCBmcmFtZSkgewoJCQkJaWYgKG5vZGVzICE9PSB0aGlzLnNjcmlwdC5zdGFjayB8fCB0aGlzLmlzUHJvY2VkdXJlKQoJCQkJCXJldHVybiBvcmlnaW5hbChub2RlcywgZnJhbWUpOwoJCQkJdGhpcy5zb3VyY2UgKz0gYHRyeSB7XG5gOwoJCQkJb3JpZ2luYWwobm9kZXMsIGZyYW1lKTsKCQkJCXRoaXMuc291cmNlICs9IGB9IGNhdGNoKGUpIHtcbmA7CgkJCQl0aGlzLnNvdXJjZSArPSBgaWYgKCFlLmlubGluZVJldHVybikgdGhyb3cgZTtcbmA7CgkJCQl0aGlzLnNvdXJjZSArPSBgfVxuYDsKCQkJfSwKCQl9KTsKCX0KCgljbGFzcyBpbmxpbmUgewoJCWdldEluZm8oKSB7CgkJCXJldHVybiB7CgkJCQlpZDogZXhJZCwKCQkJCWNvbG9yMTogIiM1NjU2NTYiLAoJCQkJbmFtZTogIuWGheiBlCIsCgkJCQlibG9ja3M6IFsKCQkJCQl7CgkJCQkJCW9wY29kZTogImlubGluZSIsCgkJCQkJCWJsb2NrVHlwZTogU2NyYXRjaC5CbG9ja1R5cGUuT1VUUFVULAoJCQkJCQl0ZXh0OiBbIuWGheiBlCJdLAoJCQkJCQlvdXRwdXQ6ICJTdHJpbmciLAoJCQkJCQlvdXRwdXRTaGFwZTogMywKCQkJCQkJYnJhbmNoQ291bnQ6IDEKCQkJCQl9LAoJCQkJCXsKCQkJCQkJb3Bjb2RlOiAicmV0dXJuIiwKCQkJCQkJYmxvY2tUeXBlOiBTY3JhdGNoLkJsb2NrVHlwZS5DT01NQU5ELAoJCQkJCQl0ZXh0OiAi5YaF6IGU6L+U5ZueIFtWQUxVRV0iLAoJCQkJCQlhcmd1bWVudHM6IHsKCQkJCQkJCVZBTFVFOiB7CgkJCQkJCQkJdHlwZTogU2NyYXRjaC5Bcmd1bWVudFR5cGUuU1RSSU5HLAoJCQkJCQkJfQoJCQkJCQl9LAoJCQkJCQlpc1Rlcm1pbmFsOiB0cnVlCgkJCQkJfQoJCQkJXQoJCQl9CgkJfQoKCQkvLyBUaGUgYmVsb3cgZnVuY3Rpb25zIHJ1biBvbmx5IGluIHRoZSBpbnRlcnByZXRlci4KCgkJaW5saW5lKGFyZ3MsIHV0aWwpIHsKCQkJY29uc3QgdGhyZWFkID0gdXRpbC50aHJlYWQ7CgkJCWlmICh0eXBlb2YgdXRpbC5zdGFja0ZyYW1lLl9pbmxpbmVMYXN0UmV0dXJuICE9PSAidW5kZWZpbmVkIikgewoJCQkJLy8gU3RhZ2UgMzogV2UgaGF2ZSBhIHJldHVybiB2YWx1ZSBhbmQgd2UKCQkJCS8vIGNhbiByZXR1cm4gdGhlIHZhbHVlLCByZXR1cm4gaXQhCgkJCQlyZXR1cm4gdXRpbC5zdGFja0ZyYW1lLl9pbmxpbmVSZXR1cm47CgkJCX0gZWxzZSBpZiAodHlwZW9mIHV0aWwuc3RhY2tGcmFtZS5faW5saW5lUmV0dXJuICE9PSAidW5kZWZpbmVkIikgewoJCQkJLy8gU3RhZ2UgMjogV2UgaGF2ZSBhIHJldHVybiB2YWx1ZSwgYnV0IHdlJ2xsIHNraXAKCQkJCS8vIG92ZXIgdGhlIG91dGVyIGJsb2NrLgoJCQkJLy8gVG8gcHJldmVudCB0aGlzLCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrIGFnYWluCgkJCQkvLyBhbmQgaGF2ZSBhIHRoaXJkIHN0YWdlCgkJCQljb25zdCByZXR1cm5WYWx1ZSA9IHV0aWwuc3RhY2tGcmFtZS5faW5saW5lUmV0dXJuOwoKCQkJCXV0aWwudGhyZWFkLnBvcFN0YWNrKCk7CgoJCQkJdXRpbC5zdGFja0ZyYW1lLl9pbmxpbmVMYXN0UmV0dXJuID0gdHJ1ZTsKCQkJCXV0aWwuc3RhY2tGcmFtZS5faW5saW5lUmV0dXJuID0gcmV0dXJuVmFsdWU7CgoJCQkJcmV0dXJuIHJldHVyblZhbHVlOwoJCQl9IGVsc2UgewoJCQkJLy8gU3RhZ2UgMTogUnVuIHRoZSBzdGFjay4KCQkJCS8vIFByZXRlbmQgdGhlIGJsb2NrIHJldHVybnMgYSBwcm9taXNlIHNvIHRoYXQKCQkJCS8vIHRoZSBpbnRlcnByZXRlciBwYXVzZXMgb24gdGhlIGJsb2NrLAoJCQkJLy8gYW5kIGNvbnRpbnVlIHJ1bm5pbmcgdGhlIHNjcmlwdCBhZnRlciBleGVjdXRlKCkKCQkJCS8vIGZpbmlzaGVzLgoKCQkJCWNvbnN0IHN0YWNrRnJhbWUgPSB0aHJlYWQucGVla1N0YWNrRnJhbWUoKTsKCQkJCWNvbnN0IG9sZEdvVG9OZXh0QmxvY2sgPSB0aHJlYWQuZ29Ub05leHRCbG9jazsKCgkJCQljb25zdCByZXNldEdvVG9OZXh0ID0gZnVuY3Rpb24gKCkgewoJCQkJCXRocmVhZC5nb1RvTmV4dEJsb2NrID0gb2xkR29Ub05leHRCbG9jazsKCQkJCX0KCQkJCWNvbnN0IGJsb2NrR2xvd0luRnJhbWUgPSB0aHJlYWQuYmxvY2tHbG93SW5GcmFtZTsKCQkJCWNvbnN0IHJlc2V0R2xvd0luRnJhbWUgPSBmdW5jdGlvbiAoKSB7CgkJCQkJZGVsZXRlIHRocmVhZC5ibG9ja0dsb3dJbkZyYW1lOwoJCQkJCXRocmVhZC5ibG9ja0dsb3dJbkZyYW1lID0gYmxvY2tHbG93SW5GcmFtZTsKCQkJCX0KCgkJCQljb25zdCB0cmFwID0gKCkgPT4gewoJCQkJCXRocmVhZC5zdGF0dXMgPSB0aHJlYWQuY29uc3RydWN0b3IuU1RBVFVTX1JVTk5JTkc7CgoJCQkJCWNvbnN0IHJlYWxCbG9ja0lkID0gc3RhY2tGcmFtZS5yZXBvcnRpbmc7CgkJCQkJdXRpbC5zdGFja0ZyYW1lLl9pbmxpbmVSZWFsQmxvY2tJZCA9IHJlYWxCbG9ja0lkOwoJCQkJCXRocmVhZC5wdXNoU3RhY2socmVhbEJsb2NrSWQpOwoKCQkJCQl0aGlzLnN0ZXBUb0JyYW5jaFdpdGhCbG9ja0lkKHJlYWxCbG9ja0lkLCB0aHJlYWQsIDEsIGZhbHNlKTsKCQkJCX0KCgkJCQkvLyBUcmFwIHRocmVhZC5nb1RvTmV4dEJsb2NrIGZvciBlZGdlLWFjdGl2YXRlZCBoYXRzCgkJCQl0aHJlYWQuZ29Ub05leHRCbG9jayA9IGZ1bmN0aW9uICgpIHsKCQkJCQlyZXNldEdsb3dJbkZyYW1lKCk7CgoJCQkJCXRyYXAoKTsKCgkJCQkJdGhyZWFkLmdvVG9OZXh0QmxvY2sgPSBvbGRHb1RvTmV4dEJsb2NrOwoJCQkJCW9sZEdvVG9OZXh0QmxvY2suY2FsbCh0aGlzKTsKCQkJCQlyZXNldEdvVG9OZXh0KCk7CgkJCQl9CgkJCQkvLyBBZGQgYSBnZXR0ZXIgb24gdGhyZWFkLmJsb2NrR2xvd0luRnJhbWUgZm9yIG90aGVyIHNjcmlwdHMKCQkJCU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aHJlYWQsICJibG9ja0dsb3dJbkZyYW1lIiwgewoJCQkJCWdldCgpIHsKCQkJCQkJcmV0dXJuIGJsb2NrR2xvd0luRnJhbWU7CgkJCQkJfSwKCQkJCQlzZXQobmV3VmFsdWUpIHsKCQkJCQkJcmVzZXRHb1RvTmV4dCgpOwoJCQkJCQl0cmFwKCk7CgkJCQkJCXJlc2V0R2xvd0luRnJhbWUoKTsKCQkJCQl9LAoJCQkJCWVudW1lcmFibGU6IHRydWUsCgkJCQkJY29uZmlndXJhYmxlOiB0cnVlLAoJCQkJfSk7CgoJCQkJLy8gRmFrZSBwcm9taXNlCgkJCQlyZXR1cm4geyB0aGVuOiAoKSA9PiB7IH0gfTsKCQkJfQoJCX0KCgkJc3RlcFRvQnJhbmNoV2l0aEJsb2NrSWQoYmxvY2tJZCwgdGhyZWFkLCBicmFuY2hOdW0sIGlzTG9vcCkgewoJCQlpZiAoIWJyYW5jaE51bSkgewoJCQkJYnJhbmNoTnVtID0gMTsKCQkJfQoJCQljb25zdCBjdXJyZW50QmxvY2tJZCA9IGJsb2NrSWQ7CgkJCWNvbnN0IGJyYW5jaElkID0gdGhyZWFkLnRhcmdldC5ibG9ja3MuZ2V0QnJhbmNoKAoJCQkJY3VycmVudEJsb2NrSWQsCgkJCQlicmFuY2hOdW0KCQkJKTsKCQkJdGhyZWFkLnBlZWtTdGFja0ZyYW1lKCkuaXNMb29wID0gaXNMb29wOwoJCQlpZiAoYnJhbmNoSWQpIHsKCQkJCS8vIFB1c2ggYnJhbmNoIElEIHRvIHRoZSB0aHJlYWQncyBzdGFjay4KCQkJCXRocmVhZC5wdXNoU3RhY2soYnJhbmNoSWQpOwoJCQl9IGVsc2UgewoJCQkJdGhyZWFkLnB1c2hTdGFjayhudWxsKTsKCQkJfQoJCX0KCgkJcmV0dXJuKHsgVkFMVUUgfSwgdXRpbCkgewoJCQljb25zdCB0aHJlYWQgPSB1dGlsLnRocmVhZDsKCQkJY29uc3QgcmV0dXJuVmFsdWUgPSBWQUxVRSA/PyAiIjsKCgkJCWxldCBibG9ja0lEID0gdGhyZWFkLnBlZWtTdGFjaygpOwoJCQl3aGlsZSAoYmxvY2tJRCkgewoJCQkJY29uc3QgYmxvY2sgPSB0aHJlYWQudGFyZ2V0LmJsb2Nrcy5nZXRCbG9jayhibG9ja0lEKTsKCQkJCWlmIChibG9jayAmJiBibG9jay5vcGNvZGUgPT09IGV4SWQgKyAiX2lubGluZSIpIHsKCQkJCQlicmVhazsKCQkJCX0KCQkJCXRocmVhZC5wb3BTdGFjaygpOwoJCQkJYmxvY2tJRCA9IHRocmVhZC5wZWVrU3RhY2soKTsKCQkJfQoKCQkJaWYgKHRocmVhZC5zdGFjay5sZW5ndGggPT09IDApIHsKCQkJCS8vIENsZWFuIHVwIQoJCQkJdGhyZWFkLnJlcXVlc3RTY3JpcHRHbG93SW5GcmFtZSA9IGZhbHNlOwoJCQkJdGhyZWFkLnN0YXR1cyA9IHRocmVhZC5jb25zdHJ1Y3Rvci5TVEFUVVNfRE9ORTsKCQkJfSBlbHNlIHsKCQkJCS8vIFJldHVybiB0aGUgdmFsdWUKCQkJCXV0aWwuc3RhY2tGcmFtZS5faW5saW5lUmV0dXJuID0gcmV0dXJuVmFsdWU7CgkJCQl0aHJlYWQuc3RhdHVzID0gdGhyZWFkLmNvbnN0cnVjdG9yLlNUQVRVU19SVU5OSU5HOwoJCQl9CgkJfQoJfQoKCS8vIFJlaW1wbGVtZW50aW5nIHRoZSAib3V0cHV0IiBhbmQgIm91dHB1dFNoYXBlIiBibG9jayBwYXJhbWV0ZXJzCgljb25zdCBjYmZzYiA9IHJ1bnRpbWUuX2NvbnZlcnRCbG9ja0ZvclNjcmF0Y2hCbG9ja3MuYmluZChydW50aW1lKTsKCXJ1bnRpbWUuX2NvbnZlcnRCbG9ja0ZvclNjcmF0Y2hCbG9ja3MgPSBmdW5jdGlvbiAoYmxvY2tJbmZvLCBjYXRlZ29yeUluZm8pIHsKCQljb25zdCByZXMgPSBjYmZzYihibG9ja0luZm8sIGNhdGVnb3J5SW5mbyk7CgkJaWYgKGJsb2NrSW5mby5vdXRwdXRTaGFwZSkgewoJCQlpZiAoIXJlcy5qc29uLm91dHB1dFNoYXBlKSByZXMuanNvbi5vdXRwdXRTaGFwZSA9IGJsb2NrSW5mby5vdXRwdXRTaGFwZTsKCQl9CgkJaWYgKGJsb2NrSW5mby5vdXRwdXQpIHsKCQkJaWYgKCFyZXMuanNvbi5vdXRwdXQpIHJlcy5qc29uLm91dHB1dCA9IGJsb2NrSW5mby5vdXRwdXQ7CgkJfQoJCWlmICghcmVzLmpzb24uYnJhbmNoQ291bnQpIHJlcy5qc29uLmJyYW5jaENvdW50ID0gYmxvY2tJbmZvLmJyYW5jaENvdW50OwoJCXJldHVybiByZXM7Cgl9CgoJU2NyYXRjaC5leHRlbnNpb25zLnJlZ2lzdGVyKG5ldyBpbmxpbmUoKSk7Cn0pKFNjcmF0Y2gpOwo=';
// Extension settings are temporarily unavailable for Umi
/*
import {addNewSetting} from '../reducers/settings';
import {newExtensionSettings} from '../reducers/extension-settings';
*/
import JSZip from 'jszip';
import mime from 'mime-types';
import vm from 'vm';

import ClipCCExtension from 'clipcc-extension';


import rxFSIconURL from './libraries/extensions/rxfs/rxfs.svg';
import rxFSInsetIconURL from './libraries/extensions/rxfs/rxfsicon.svg';

import iframeIconURL from './libraries/extensions/iframe/iframemain.png';

import messageIconURL from './libraries/extensions/message/messagemain.jpg';

import anitextIconURL from './libraries/extensions/anitext/anitextmain.png';
import anitextInsetIconURL from './libraries/extensions/anitext/anitext.svg';

import EvalIconURL from './libraries/extensions/eval/evalmain.png';

import ListIconURL from './libraries/extensions/list/list.svg';
import lazyaIconURL from './libraries/extensions/lazyload/lazyload.svg';
import rtimejsIconURL from './libraries/extensions/rtimejs/runtimemain.png';
import toolIconURL from './libraries/extensions/tool/tool.svg';
import OperationIconURL from './libraries/extensions/Operation/operations.png';
import InlineIcon from './libraries/extensions/inline/inlinemain.svg';

//import localIconURL from './libraries/extensions/local/local.png';

import musicIconURL from './libraries/extensions/music/music.png';
import musicInsetIconURL from './libraries/extensions/music/music-small.svg';

import penIconURL from './libraries/extensions/pen/pen.png';
import penInsetIconURL from './libraries/extensions/pen/pen-small.svg';

import videoSensingIconURL from './libraries/extensions/videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './libraries/extensions/videoSensing/video-sensing-small.svg';

import text2speechIconURL from './libraries/extensions/text2speech/text2speech.png';
import text2speechInsetIconURL from './libraries/extensions/text2speech/text2speech-small.svg';

import translateIconURL from './libraries/extensions/translate/translate.png';
import translateInsetIconURL from './libraries/extensions/translate/translate-small.png';

import makeymakeyIconURL from './libraries/extensions/makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './libraries/extensions/makeymakey/makeymakey-small.svg';

import microbitIconURL from './libraries/extensions/microbit/microbit.png';
import microbitInsetIconURL from './libraries/extensions/microbit/microbit-small.svg';
import microbitConnectionIconURL from './libraries/extensions/microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './libraries/extensions/microbit/microbit-small.svg';

import ev3IconURL from './libraries/extensions/ev3/ev3.png';
import ev3InsetIconURL from './libraries/extensions/ev3/ev3-small.svg';
import ev3ConnectionIconURL from './libraries/extensions/ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './libraries/extensions/ev3/ev3-small.svg';

import wedo2IconURL from './libraries/extensions/wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './libraries/extensions/wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './libraries/extensions/wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './libraries/extensions/wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './libraries/extensions/wedo2/wedo-button-illustration.svg';

import boostIconURL from './libraries/extensions/boost/boost.png';
import boostInsetIconURL from './libraries/extensions/boost/boost-small.svg';
import boostConnectionIconURL from './libraries/extensions/boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './libraries/extensions/boost/boost-small.svg';
import boostConnectionTipIconURL from './libraries/extensions/boost/boost-button-illustration.svg';

import gdxforIconURL from './libraries/extensions/gdxfor/gdxfor.png';
import gdxforInsetIconURL from './libraries/extensions/gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './libraries/extensions/gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './libraries/extensions/gdxfor/gdxfor-small.svg';

import twIcon from './libraries/extensions/tw/tw.svg';

import customExtensionIcon from './libraries/extensions/custom/custom.svg';

import galleryIcon from './libraries/extensions/gallery/gallery.svg';


const builtinExtensions = [
    {
        name: 'Eval',
        extensionId: 'eval',
        author: '大主教大祭司',
        iconURL: EvalIconURL,
        description: "rc.rxblocks.eval.discribe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: 'rc.rxblocks.inline.name',
        extensionId: 'cstlmsInline',
        author: '大主教大祭司',
        extensionURL: inlineblock,
        iconURL: InlineIcon,
        description: "rc.rxblocks.inline.describe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: 'rc.rxblocks.window.name-u',
        extensionId: 'window',
        author: '大主教大祭司',
        iconURL: customExtensionIcon,
        description: "rc.rxblocks.window.describe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: "gui.extension.music.name",
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: "gui.extension.music.description",
        tags: ['scratch'],
        featured: true
    },
    {
        name: "gui.extension.pen.name",
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: "gui.extension.pen.description",
        tags: ['scratch'],
        featured: true
    },
    {
        name: "rc.rxblocks.anitext.name",
        extensionId: 'text',
        author: 'ScratchLab',
        iconURL: anitextIconURL,
        insetIconURL: anitextInsetIconURL,
        description: "rc.rxblocks.anitext.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "gui.extension.videosensing.name",
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: "gui.extension.videosensing.description",
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'rc.rxblocks.list.name-u',
        extensionId: 'list',
        author: '大主教大祭司',
        iconURL: ListIconURL,
        description: "rc.rxblocks.list.describe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: 'rc.rxblocks.next.name-u',
        extensionId: 'next',
        author: '大主教大祭司',
        iconURL: customExtensionIcon,
        description: "rc.rxblocks.next.describe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: 'rxFS',
        extensionId: 'rxfs',
        author: '大主教大祭司',
        iconURL: rxFSIconURL,
        insetIconURL: rxFSInsetIconURL,
        description: "rc.rxblocks.rxfs.describe",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: "rc.rxblocks.iframe.name-u",
        extensionId: 'iframe',
        author: 'PenguinMod',
        iconURL: iframeIconURL,
        description: "rc.rxblocks.iframe.describe",
        tags: ['rcodenow'],
        featured: true,
        requirement: ['internet']
    },
    {
        name: "rc.rxblocks.message.name-u",
        extensionId: 'message',
        author: '大主教大祭司',
        iconURL: messageIconURL,
        description: "rc.rxblocks.message.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "rc.rxblocks.runtime.name-u",
        extensionId: 'rtimejs',
        author: '大主教大祭司',
        iconURL: rtimejsIconURL,
        description: "rc.rxblocks.runtime.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "rc.rxblocks.lazya.name-u",
        extensionId: 'lazyAudio',
        author: '大主教大祭司',
        iconURL: lazyaIconURL,
        description: "rc.rxblocks.lazya.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "rc.rxblocks.tool.name-u",
        extensionId: 'tool',
        iconURL: toolIconURL,
        description: "rc.rxblocks.tool.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "be.Operation.Operation-u",
        extensionId: 'Operation',
        iconURL: OperationIconURL,
        description: "be.Operation.describe",
        tags: ['rcodenow'],
        featured: true,
    },
    {
        name: "gui.extension.text2speech.name",
        extensionId: 'text2speech',
        author: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: "gui.extension.text2speech.description",
        tags: ['scratch'],
        featured: true,
        requirement: ['internet']
    },
    {
        name: "gui.extension.translate.name",
        extensionId: 'translate',
        author: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: "gui.extension.translate.description",
        tags: ['scratch'],
        featured: true,
        requirement: ['internet']
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        author: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: "gui.extension.makeymakey.description",
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        author: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: "gui.extension.microbit.description",
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        requirement: ['internet'],
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: "gui.extension.microbit.connectingMessage",
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        author: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: "gui.extension.ev3.description",
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        requirement: ['internet'],
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: "gui.extension.ev3.connectingMessage",
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        author: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: "gui.extension.boost.description",
        tags: ['scratch'],
        featured: true,
        disabled: false,
        requirement: ['internet', 'bluetooth'],
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: "gui.extension.boost.connectingMessage",
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        author: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: "gui.extension.wedo2.description",
        tags: ['scratch'],
        featured: true,
        disabled: false,
        requirement: ['internet', 'bluetooth'],
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: "gui.extension.wedo2.connectingMessage",
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        author: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: "gui.extension.gdxfor.description",
        tags: ['scratch'],
        featured: true,
        disabled: false,
        requirement: ['internet', 'bluetooth'],
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: "gui.extension.gdxfor.connectingMessage",
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: "tw.twExtension.name",
        extensionId: 'tw',
        iconURL: twIcon,
        description: "tw.twExtension.description",
        tags: ['rcodenow'],
        featured: true
    },
    {
        name: "tw.customExtension.name",
        extensionId: '',
        iconURL: customExtensionIcon,
        description: "tw.customExtension.description",
        tags: ['rcodenow'],
        featured: true
    },
];


const loadBuiltinExtension = dispatch => {
    for (const ext of builtinExtensions) {
        ClipCCExtension.extensionManager.addInstance(ext.extensionId, {
            id: ext.extensionId,
            icon: ext.iconURL,
            inset_icon: ext.insetIconURL,
            author: ext.author,
            requirement: ext.requirement,
            api: 0,
            version: '1.0.0'
        }, new ClipCCExtension.Extension());
        dispatch(initExtension(ext));
    }
};


const initExtensionAPI = (gui, vm, blocks) => {
    global.ClipCCExtension = ClipCCExtension;
    const apiInstance = {
        gui: gui.extensionAPI,
        vm: vm.extensionAPI,
        blocks: blocks
    };
    ClipCCExtension.api.registExtensionAPI(apiInstance);
};
const loadExtensionFromFile = async (dispatch, file, type) => {
    let info = {};
    let isReload = false;
    switch (type) {
    case 'ccx': {
        const zipData = await JSZip.loadAsync(file);
        let settings = null;
        let instance = null;

        // Load info
        if ('info.json' in zipData.files) {
            const content = await zipData.files['info.json'].async('text');
            info = JSON.parse(content);
            if (ClipCCExtension.extensionManager.exist(info.id)) {
                log.warn('reloading extension...');
                try {
                    ClipCCExtension.extensionManager.removeInstance(info.id);
                    ClipCCExtension.extensionManager.unloadExtensions(
                        [info.id],
                        extension => ClipCCExtension.api.getVmInstance().extensionManager.unloadExtensionURL(info.id)
                    );
                    dispatch(disableExtension(info.id));
                    isReload = true;

                    log.info('reload complete');
                } catch (e) {
                    log.error('error occurred while reloading', e);
                }
            }
            if (info.icon) {
                const data = await zipData.files[info.icon].async('arraybuffer');
                info.icon = URL.createObjectURL(new Blob(
                    [data], {type: mime.lookup(info.icon) || 'image/png'}
                ));
            }
            if (info.inset_icon) {
                const data = await zipData.files[info.inset_icon].async('arraybuffer');
                info.inset_icon = URL.createObjectURL(new Blob(
                    [data], {type: mime.lookup(info.inset_icon) || 'image/svg+xml'}
                ));
            }
            info.api = 1;
        } else {
            throw new Error('Cannot find \'info.json\' in ccx extension.');
        }


        // Load extension class
        if ('main.js' in zipData.files) {
            const script = new vm.Script(await zipData.files['main.js'].async('text'));
            const ExtensionPrototype = script.runInThisContext();
            instance = new ExtensionPrototype();
        } else {
            throw new Error('Cannot find \'main.js\' in ccx extension');
        }

        // Load settings
        if ('settings.json' in zipData.files) {
            const content = await zipData.files['settings.json'].async('text');
            settings = JSON.parse(content);
        }

        // Load locale
        const locale = {};
        for (const fileName in zipData.files) {
            const result = fileName.match(/^locales\/([A-Za-z0-9_-]+).json$/);
            if (result) {
                locale[result[1]] = JSON.parse(await zipData.files[fileName].async('text'));
            }
        }
        if (info.default_language && locale.hasOwnProperty(info.default_language)) { // default language param
            locale.default = locale[info.default_language];
        } else {
            locale.default = locale.en;
        }

        const extensionInfo = {
            extensionId: info.id,
            name: `${info.id}.name`,
            description: `${info.id}.description`,
            iconURL: info.icon,
            insetIconURL: info.inset_icon,
            author: info.author,
            requirement: info.requirement,
            instance: instance,
            api: info.api,
            version: info.version,
            fileContent: file
        };

        if (settings) loadSettings(dispatch, info.id, settings);
        ClipCCExtension.extensionManager.addInstance(info.id, info, instance);
        dispatch(addLocales(locale));
        dispatch(updateLocale());
        dispatch(initExtension(extensionInfo));
        if (isReload) dispatch(enableExtension(info.id));
        break;
    }
    case 'js': {
        const Extension = vm.runInThisContext(file);
        const instance = new Extension();
        info = instance.getInfo();
        const apiInstance = new ClipCCExtension.CompatibleExtension(instance);
        const extensionInfo = {
            extensionId: info.id,
            iconURL: info.blockIconURL,
            insetIconURL: info.blockIconURL,
            author: 'External Extension',
            name: info.name,
            description: 'External Extension',
            requirement: [],
            instance: apiInstance,
            api: 1,
            fileContent: file
        };

        ClipCCExtension.extensionManager.addInstance(info.id, {
            id: info.id,
            icon: info.blockIconURL,
            inset_icon: info.blockIconURL,
            author: info.author,
            requirement: info.requirement,
            api: 1
        }, instance);
        dispatch(initExtension(extensionInfo));
        break;
    }
    /* case 'scx': {
        const url = URL.createObjectURL(file);
        this.props.vm.extensionManager.loadExtensionURL(url);
        break;
    }*/
    default: {
        throw new Error(`Unkown extension type *.${type}`);
    }
    }
    return info;
};

const loadCcx = async (dispatch, file) => {
    let info = {};
    let isReload = false;

    const zipData = await JSZip.loadAsync(file);
    let instance = null;

    // Load info
    if ('info.json' in zipData.files) {
        const content = await zipData.files['info.json'].async('text');
        info = JSON.parse(content);
        if (ClipCCExtension.extensionManager.exist(info.id)) {
            console.warn('reloading extension...');
            try {
                ClipCCExtension.extensionManager.removeInstance(info.id);
                ClipCCExtension.extensionManager.unloadExtensions(
                    [info.id],
                    extension => ClipCCExtension.api.getVmInstance().extensionManager.unloadExtensionURL(info.id)
                );
                dispatch(disableExtension(info.id));
                isReload = true;
                console.log('reload complete');
            } catch (e) {
                console.error('error occurred while reloading', e);
            }
        }
        if (info.icon) {
            const data = await zipData.files[info.icon].async('arraybuffer');
            info.icon = URL.createObjectURL(new Blob(
                [data], {
                type: mime.lookup(info.icon)
            }
            ));
        }
        if (info.inset_icon) {
            const data = await zipData.files[info.inset_icon].async('blob');
            info.inset_icon = URL.createObjectURL(new Blob(
                [data], {
                type: mime.lookup(info.inset_icon)
            }
            ));
        }
        info.api = 1;
    } else {
        throw new Error('Cannot find \'info.json\' in ccx extension.');
    }


    // Load extension class
    if ('main.js' in zipData.files) {
        const script = new vm.Script(await zipData.files['main.js'].async('text'));
        const ExtensionPrototype = script.runInThisContext();
        instance = new ExtensionPrototype();
    } else {
        throw new Error('Cannot find \'main.js\' in ccx extension');
    }

    // Load locale
    const locale = {};
    for (const fileName in zipData.files) {
        const result = fileName.match(/^locales\/([A-Za-z0-9_-]+).json$/);
        if (result) {
            locale[result[1]] = JSON.parse(await zipData.files[fileName].async('text'));
        }
    }
    if (info.default_language && locale.hasOwnProperty(info.default_language)) {
        // default language param
        locale.default = locale[info.default_language];
    } else {
        locale.default = locale.en;
    }

    const extensionInfo = {
        extensionId: info.id,
        name: `${info.id}.name`,
        description: `${info.id}.description`,
        iconURL: info.icon,
        insetIconURL: info.inset_icon,
        author: info.author,
        requirement: info.requirement,
        instance: instance,
        api: info.api,
        version: info.version,
        fileContent: file,
        incompatibleWithScratch: true,
        tags: ['clipcc']
    };

    ClipCCExtension.extensionManager.addInstance(info.id, info, instance);
    dispatch(addLocales(locale));
    dispatch(updateLocale());
    dispatch(initExtension(extensionInfo));
    if (isReload) dispatch(enableExtension(info.id));
    return info;
};

export {
    loadBuiltinExtension,
    initExtensionAPI,
    loadCcx,
    loadExtensionFromFile
};