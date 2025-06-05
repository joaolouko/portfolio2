import { useLanguage } from "../../hooks/useLanguage";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-800 text-center py-6 text-gray-500 text-sm select-none">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </footer>
    )
}