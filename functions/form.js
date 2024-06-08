export function previousTab(key, setKey) {
    switch (key) {
        case 'hierarquia_visual': 
            setKey('consistencia');
            break;
        case 'usabilidade':
            setKey('hierarquia_visual');
            break;
        case 'design_visual': 
            setKey('usabilidade');
            break;
        case 'imagens':
            setKey('design_visual');
            break;
        case 'mobile':
            setKey('imagens');
            break;
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function nextTab(key, setKey, formRef) {
    switch (key) {
        case 'consistencia':
            setKey('hierarquia_visual');
            break;
        case 'hierarquia_visual':
            setKey('usabilidade');
            break;
        case 'usabilidade':
            setKey('design_visual');
            break;
        case 'design_visual':
            setKey('imagens');
            break;
        case 'imagens':
            setKey('mobile');
            break;
        case 'mobile':
            if (formRef.current) {
                formRef.current.dispatchEvent(new Event('submit', { bubbles: true }));
            }
            break;
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}