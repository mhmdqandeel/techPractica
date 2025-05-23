package com.spring.techpractica.maper;

import com.spring.techpractica.dto.session.SessionRequest;
import com.spring.techpractica.dto.session.SessionResponse;
import com.spring.techpractica.dto.session.SessionsResponse;
import com.spring.techpractica.model.entity.Session;
import com.spring.techpractica.model.entity.techSkills.Category;
import com.spring.techpractica.model.entity.techSkills.Technology;

import java.util.ArrayList;
import java.util.List;

public class SessionMapper {

    private SessionMapper() {
    }

    public static Session sessionCreatorToSession(SessionRequest sessionRequest) {

        return Session.builder()
                .sessionName(sessionRequest.getNameSession())
                .sessionDescription(sessionRequest.getDescriptionSession())
                .isPrivate(sessionRequest.isPrivateSession())
                .sessionCategories(new ArrayList<>())
                .sessionRequests(new ArrayList<>())
                .sessionRequirements(new ArrayList<>())
                .sessionMembers(new ArrayList<>())
                .timestampList(new ArrayList<>())
                .sessionTechnologies(new ArrayList<>())
                .sessionCategories(new ArrayList<>())
                .sessionSystems(new ArrayList<>())
                .build();
    }

    public static SessionResponse sessionToSessionResponse(Session session) {
        return SessionResponse.
                builder()
                .id(session.getSessionId())
                .sessionName(session.getSessionName())
                .privateSession(session.isPrivate())
                .sessionDescription(session.getSessionDescription())
                .system(session.getSessionSystems().getFirst().getSystemName())
                .technologies(session.getSessionTechnologies().stream()
                        .map(Technology::getTechnologyName).toList())
                .categories(session.getSessionCategories()
                        .stream()
                        .map(Category::getCategoryName)
                        .toList())
                .build();
    }

    public static List<SessionResponse> sessionsToSessionResponses(List<Session> sessions) {
        return sessions.
                stream()
                .map(SessionMapper::sessionToSessionResponse)
                .toList();
    }

    public static SessionsResponse sessionsAndTotalSessionsToSessionsResponses(List<Session> sessions, long totalSessions) {
        List<SessionResponse> sessionResponse = sessionsToSessionResponses(sessions);
        return SessionsResponse.builder()
                .sessionsCount(totalSessions)
                .sessions(sessionResponse)
                .build();
    }
}
