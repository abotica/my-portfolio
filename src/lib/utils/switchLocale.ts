import { useRouter } from "@/i18n/navigation";

export default function switchLocale(locale: string, newLocale: string, router: ReturnType<typeof useRouter>, pathname: string) {

    if(newLocale !== locale ) {
        router.replace(pathname, {locale: newLocale});
        router.refresh();
    }
}
