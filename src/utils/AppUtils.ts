import EventEmitterInstance, { EVENTS } from "../services/EventEmitter";
import { SessionStorage } from "../services/SessionStorage";

interface HTMLElementWithTooltip extends HTMLElement {
    tooltip?: HTMLDivElement;
}

const init = () => {
    // _initTooltip();
    _initSidebarAndResize();
}

const _initTooltip = () => {
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');

    elementsWithTooltip.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
            const tooltipElement = element as HTMLElementWithTooltip;

            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip'); // Add the animation class
            tooltip.textContent = element.getAttribute('data-tooltip');

            document.body.appendChild(tooltip);
            const tooltipWidth = tooltip.offsetWidth;
            const rect = element.getBoundingClientRect();

            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
            tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltipWidth / 2)}px`;

            // Set tooltip opacity to trigger the fade-in effect
            tooltip.style.opacity = '1';

            tooltipElement.tooltip = tooltip;


            const removeChild = () => {
                if (tooltipElement.tooltip) {

                    if (document.body.contains(tooltipElement.tooltip)) {
                        document.body.removeChild(tooltipElement.tooltip);
                    }
                    delete tooltipElement.tooltip;
                }
            }

            tooltipElement.onclick = removeChild
            element.addEventListener('mouseleave', removeChild);
        });
    });

}

const _initSidebarAndResize = () => {
    if (SessionStorage.get('isSidebarOpen') === null) SessionStorage.set('isSidebarOpen', true);
    window.addEventListener('resize', () => {
        EventEmitterInstance.emit(EVENTS.WINDOW_RESIZE)
    })
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, size + i));
    }
    return chunks;
};

export const AppUtils = {
    init,
    chunkArray
}