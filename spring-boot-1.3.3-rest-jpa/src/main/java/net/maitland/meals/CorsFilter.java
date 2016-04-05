package net.maitland.meals;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

/**
 * Created by David on 02/04/2016.
 */
@Component
public class CorsFilter implements Filter {

    private static String[] ALLOWED_HEADERS = {"Content-Type","X-Requested-With"};

    @Override
    public void init(FilterConfig arg0) throws ServletException {}

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp,
                         FilterChain chain) throws IOException, ServletException {
        // TODO Auto-generated method stub
        HttpServletResponse response=(HttpServletResponse) resp;

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");

        Enumeration<String> headers = ((HttpServletRequest) req).getHeaderNames();
        while(headers.hasMoreElements()) {
            response.addHeader("Access-Control-Allow-Headers", headers.nextElement());
        }

        for(int i = 0; i < ALLOWED_HEADERS.length; i++)
        {
            response.addHeader("Access-Control-Allow-Headers", ALLOWED_HEADERS[i]);
        }

        chain.doFilter(req, resp);
    }

    @Override
    public void destroy() {}

}